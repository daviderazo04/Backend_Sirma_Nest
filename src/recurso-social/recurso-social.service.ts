import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRecursoSocialDto } from './dto/create-recurso-social.dto';
import { UpdateRecursoSocialDto } from './dto/update-recurso-social.dto';
import { Recursosocial } from './entities/recurso-social.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnfermeriaService } from 'src/enfermeria/enfermeria.service';

@Injectable()
export class RecursoSocialService {
  constructor(
    @InjectRepository(Recursosocial)
    private recursoSocialRepository: Repository<Recursosocial>,
    @Inject(forwardRef(() => EnfermeriaService))
    private enfermeriaService: EnfermeriaService,
  ) {}

  async create(
    createRecursoSocialDto: CreateRecursoSocialDto,
  ): Promise<Recursosocial> {
    if (!createRecursoSocialDto.idenfermeria) {
      throw new NotFoundException(
        'idEnfermeria es requerido para crear un registro de Recurso Social.',
      );
    }

    const enfermeria = await this.enfermeriaService.findOne(
      createRecursoSocialDto.idenfermeria,
    );

    if (!enfermeria) {
      throw new NotFoundException(
        `Enfermería con ID ${createRecursoSocialDto.idenfermeria} no encontrada.`,
      );
    }

    const recursoSocial = this.recursoSocialRepository.create({
      rsVivecon: createRecursoSocialDto.rsViveCon,
      rsContactosocial: createRecursoSocialDto.rsContactoSocial,
      rsApoyored: createRecursoSocialDto.rsApoyoRedes,
      rsTotal: createRecursoSocialDto.rsTotal,
      idenfermeria2: enfermeria,
    });

    return await this.recursoSocialRepository.save(recursoSocial);
  }

  async findAll() {
    return this.recursoSocialRepository.find({
      relations: ['idenfermeria2'],
    });
  }

  async findOne(id: number) {
    const recursoSocial = await this.recursoSocialRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idenfermeria2'],
    });

    if (!recursoSocial) {
      throw new NotFoundException(`Recurso Social con ID ${id} no encontrado.`);
    }

    return recursoSocial;
  }

  async update(
    id: number,
    updateRecursoSocialDto: UpdateRecursoSocialDto,
  ): Promise<Recursosocial> {
    const recursoSocial = await this.recursoSocialRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!recursoSocial) {
      throw new NotFoundException(`Recurso Social con ID ${id} no encontrado.`);
    }

    const updateData: Record<string, any> = {};

    for (const [key, value] of Object.entries(updateRecursoSocialDto)) {
      if (value !== undefined) {
        switch (key) {
          case 'rsViveCon':
            updateData.rsVivecon =
              typeof value === 'string' ? value : String(value);
            break;
          case 'rsContactoSocial':
            updateData.rsContactosocial =
              typeof value === 'string' ? value : String(value);
            break;
          case 'rsApoyoRedes':
            updateData.rsApoyored =
              typeof value === 'string' ? value : String(value);
            break;
          case 'rsTotal':
            updateData.rsTotal =
              typeof value === 'number' ? value : Number(value);
            break;
        }
      }
    }

    Object.assign(recursoSocial, updateData);

    return await this.recursoSocialRepository.save(recursoSocial);
  }

  async remove(id: number) {
    const recursoSocial = await this.recursoSocialRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!recursoSocial) {
      throw new NotFoundException(`Recurso Social con ID ${id} no encontrado.`);
    }

    await this.recursoSocialRepository.delete({ idenfermeria: id });

    return {
      message: `Recurso Social con ID ${id} eliminado exitosamente.`,
    };
  }
}
