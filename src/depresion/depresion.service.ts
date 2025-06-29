import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepresionDto } from './dto/create-depresion.dto';
import { UpdateDepresionDto } from './dto/update-depresion.dto';
import { Depresion } from './entities/depresion.entity';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';

@Injectable()
export class DepresionService {
  constructor(
    @InjectRepository(Depresion)
    private depresionRepository: Repository<Depresion>,
    @Inject(forwardRef(() => EnfermeriaService))
    private enfermeriaService: EnfermeriaService,
  ) {}

  async create(createDepresionDto: CreateDepresionDto): Promise<Depresion> {
    if (!createDepresionDto.idenfermeria) {
      throw new NotFoundException(
        'idEnfermeria es requerido para crear un registro de Depresión.',
      );
    }

    const enfermeria = await this.enfermeriaService.findOne(
      createDepresionDto.idenfermeria,
    );

    if (!enfermeria) {
      throw new NotFoundException(
        `Enfermería con ID ${createDepresionDto.idenfermeria} no encontrada.`,
      );
    }

    const depresion = this.depresionRepository.create({
      ...createDepresionDto,
      idenfermeria2: enfermeria, // RELACIÓN correcta
    });

    return await this.depresionRepository.save(depresion);
  }

  async findAll(): Promise<Depresion[]> {
    return await this.depresionRepository.find({
      relations: ['idenfermeria2'], // Carga la relación con Enfermeria
    });
  }

  async findOne(id: number): Promise<Depresion> {
    const depresion = await this.depresionRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idenfermeria2'],
    });

    if (!depresion) {
      throw new NotFoundException(
        `Registro de Depresión con ID ${id} no encontrado.`,
      );
    }

    return depresion;
  }

  async update(
    id: number,
    updateDepresionDto: UpdateDepresionDto,
  ): Promise<Depresion> {
    const depresion = await this.depresionRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!depresion) {
      throw new NotFoundException(
        `Registro de Depresión con ID ${id} no encontrado.`,
      );
    }

    Object.assign(depresion, updateDepresionDto);

    return await this.depresionRepository.save(depresion);
  }

  async remove(id: number): Promise<Depresion> {
    const depresion = await this.depresionRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!depresion) {
      throw new NotFoundException(
        `Registro de Depresión con ID ${id} no encontrado.`,
      );
    }

    return await this.depresionRepository.remove(depresion);
  }
}
