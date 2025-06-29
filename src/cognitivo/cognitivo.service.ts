import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cognitivo } from './entities/cognitivo.entity';
import { CreateCognitivoDto } from './dto/create-cognitivo.dto';
import { UpdateCognitivoDto } from './dto/update-cognitivo.dto';
import { EnfermeriaService } from 'src/enfermeria/enfermeria.service';

@Injectable()
export class CognitivoService {
  constructor(
    @InjectRepository(Cognitivo)
    private cognitivoRepository: Repository<Cognitivo>,
    @Inject(forwardRef(() => EnfermeriaService))
    private enfermeriaService: EnfermeriaService,
  ) {}

  async create(createCognitivoDto: CreateCognitivoDto): Promise<Cognitivo> {
    if (!createCognitivoDto.idenfermeria) {
      throw new NotFoundException(
        'idEnfermeria es requerido para crear un registro de Cognitivo.',
      );
    }

    const enfermeria = await this.enfermeriaService.findOne(
      createCognitivoDto.idenfermeria,
    );

    if (!enfermeria) {
      throw new NotFoundException(
        `Enfermería con ID ${createCognitivoDto.idenfermeria} no encontrada.`,
      );
    }

    const rest = { ...createCognitivoDto };

    const cognitivo = this.cognitivoRepository.create({
      cogSabefecha: rest.cogSabeFecha,
      cogAprendetres: rest.cogAprendeDeTres,
      cogRepitealreves: rest.cogRepiteAlreves,
      cogTomadoblacoloca: rest.cogTomaDoblaColoca,
      cogRepitepalabras: rest.cogRepitePalabras,
      cogCopiacirculos: rest.cogCopiaCirculos,
      cogTotal: rest.cogTotal,
      idenfermeria2: enfermeria,
      idenfermeria: rest.idenfermeria,
    });

    return await this.cognitivoRepository.save(cognitivo);
  }

  async findAll(): Promise<Cognitivo[]> {
    return await this.cognitivoRepository.find({
      relations: ['idenfermeria2'],
    });
  }

  async findOne(id: number): Promise<Cognitivo> {
    const cognitivo = await this.cognitivoRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idenfermeria2'],
    });

    if (!cognitivo) {
      throw new NotFoundException(
        `Registro Cognitivo con ID ${id} no encontrado.`,
      );
    }

    return cognitivo;
  }

  async update(
    id: number,
    updateCognitivoDto: UpdateCognitivoDto,
  ): Promise<Cognitivo> {
    const cognitivo = await this.cognitivoRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!cognitivo) {
      throw new NotFoundException(
        `Registro Cognitivo con ID ${id} no encontrado.`,
      );
    }

    const updateData: { [key: string]: number } = {};

    for (const [key, value] of Object.entries(updateCognitivoDto)) {
      if (value !== undefined) {
        const numValue = value as number;
        switch (key) {
          case 'cogSabeFecha':
            updateData.cogSabefecha = numValue;
            break;
          case 'cogAprendeDeTres':
            updateData.cogAprendetres = numValue;
            break;
          case 'cogRepiteAlreves':
            updateData.cogRepitealreves = numValue;
            break;
          case 'cogTomaDoblaColoca':
            updateData.cogTomadoblacoloca = numValue;
            break;
          case 'cogRepitePalabras':
            updateData.cogRepitepalabras = numValue;
            break;
          case 'cogCopiaCirculos':
            updateData.cogCopiacirculos = numValue;
            break;
          case 'cogTotal':
            updateData.cogTotal = numValue;
            break;
        }
      }
    }

    Object.assign(cognitivo, updateData);

    return await this.cognitivoRepository.save(cognitivo);
  }

  async remove(id: number) {
    const cognitivo = await this.cognitivoRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!cognitivo) {
      throw new NotFoundException(
        `Registro Cognitivo con ID ${id} no encontrado.`,
      );
    }

    await this.cognitivoRepository.delete({ idenfermeria: id });

    return {
      message: `Registro Cognitivo con ID ${id} eliminado exitosamente.`,
    };
  }
}
