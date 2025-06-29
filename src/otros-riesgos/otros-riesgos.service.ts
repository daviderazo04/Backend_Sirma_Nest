import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOtrosRiesgoDto } from './dto/create-otros-riesgo.dto';
import { UpdateOtrosRiesgoDto } from './dto/update-otros-riesgo.dto';
import { Otrosriesgos } from './entities/otros-riesgo.entity';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';

@Injectable()
export class OtrosRiesgosService {
  constructor(
    @InjectRepository(Otrosriesgos)
    private otrosRiesgosRepository: Repository<Otrosriesgos>,
    @Inject(forwardRef(() => EnfermeriaService))
    private enfermeriaService: EnfermeriaService,
  ) {}

  async create(
    createOtrosRiesgoDto: CreateOtrosRiesgoDto,
  ): Promise<Otrosriesgos> {
    if (!createOtrosRiesgoDto.idenfermeria) {
      throw new NotFoundException(
        'idEnfermeria es requerido para crear un registro de Otros Riesgos.',
      );
    }

    const enfermeria = await this.enfermeriaService.findOne(
      createOtrosRiesgoDto.idenfermeria,
    );

    if (!enfermeria) {
      throw new NotFoundException(
        `Enfermería con ID ${createOtrosRiesgoDto.idenfermeria} no encontrada.`,
      );
    }

    const otrosRiesgos = this.otrosRiesgosRepository.create({
      orGrupoedad: createOtrosRiesgoDto.orGrupoEdad,
      orVivecon: createOtrosRiesgoDto.orViveCon,
      orMovilidad: createOtrosRiesgoDto.orMovilidad,
      orEnfermedadaguda: createOtrosRiesgoDto.orEnfermedadAguda,
      orNeuropsico: createOtrosRiesgoDto.orNeuropsico,
      orTotal: createOtrosRiesgoDto.orTotal,
      idenfermeria2: enfermeria,
    });

    return await this.otrosRiesgosRepository.save(otrosRiesgos);
  }

  async findAll(): Promise<Otrosriesgos[]> {
    return await this.otrosRiesgosRepository.find({
      relations: ['idenfermeria2'],
    });
  }

  async findOne(id: number): Promise<Otrosriesgos> {
    const otrosRiesgos = await this.otrosRiesgosRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idenfermeria2'],
    });

    if (!otrosRiesgos) {
      throw new NotFoundException(
        `Registro de Otros Riesgos con ID ${id} no encontrado.`,
      );
    }

    return otrosRiesgos;
  }

  async update(
    id: number,
    updateOtrosRiesgoDto: UpdateOtrosRiesgoDto,
  ): Promise<Otrosriesgos> {
    const otrosRiesgos = await this.otrosRiesgosRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!otrosRiesgos) {
      throw new NotFoundException(
        `Registro de Otros Riesgos con ID ${id} no encontrado.`,
      );
    }

    const updateData: { [key: string]: number } = {};

    for (const [key, value] of Object.entries(updateOtrosRiesgoDto)) {
      if (value !== undefined) {
        const numValue = value as number;
        switch (key) {
          case 'orGrupoEdad':
            updateData.orGrupoedad = numValue;
            break;
          case 'orViveCon':
            updateData.orVivecon = numValue;
            break;
          case 'orMovilidad':
            updateData.orMovilidad = numValue;
            break;
          case 'orEnfermedadAguda':
            updateData.orEnfermedadaguda = numValue;
            break;
          case 'orNeuropsico':
            updateData.orNeuropsico = numValue;
            break;
          case 'orTotal':
            updateData.orTotal = numValue;
            break;
        }
      }
    }

    Object.assign(otrosRiesgos, updateData);

    return await this.otrosRiesgosRepository.save(otrosRiesgos);
  }

  async remove(id: number): Promise<Otrosriesgos> {
    const otrosRiesgos = await this.otrosRiesgosRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!otrosRiesgos) {
      throw new NotFoundException(
        `Registro de Otros Riesgos con ID ${id} no encontrado.`,
      );
    }

    return await this.otrosRiesgosRepository.remove(otrosRiesgos);
  }
}
