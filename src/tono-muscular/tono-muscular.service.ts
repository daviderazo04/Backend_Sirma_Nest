// src/tono-muscular/tono-muscular.service.ts
import { forwardRef, Inject, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTonoMuscularDto } from './dto/create-tono-muscular.dto';
import { UpdateTonoMuscularDto } from './dto/update-tono-muscular.dto';
import { Tonomuscular } from './entities/tono-muscular.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service'; // Import FisioterapiaService

@Injectable()
export class TonoMuscularService {
  constructor(
    @InjectRepository(Tonomuscular)
    private tonomuscularRepository: Repository<Tonomuscular>,
    // Usamos forwardRef para evitar problemas de dependencia circular
    // si FisioterapiaService también inyecta TonoMuscularService
    @Inject(forwardRef(() => FisioterapiaService))
    private fisioterapiaService: FisioterapiaService,
  ) {}

  async create(createTonoMuscularDto: CreateTonoMuscularDto): Promise<Tonomuscular> {
    const { idfisioterapia, ...restOfDto } = createTonoMuscularDto;

    // 1. Verificar si el registro de Fisioterapia asociado existe
    const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // 2. Verificar si ya existe un registro de TonoMuscular para esta Fisioterapia (relación OneToOne)
    const existingTonomuscular = await this.tonomuscularRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
    });

    if (existingTonomuscular) {
      // Si ya existe, es una actualización, no una creación. Podrías lanzar un error o llamar a update.
      // Aquí lanzamos un conflicto, indicando que ya existe un recurso.
      throw new ConflictException(`Ya existe un registro de Tono Muscular para la Fisioterapia con ID ${idfisioterapia}. Use PATCH para actualizarlo.`);
    }

    // 3. Crear el nuevo registro de Tonomuscular
    const tonomuscular = this.tonomuscularRepository.create({
      idfisioterapia: idfisioterapia, // Asignar el ID de Fisioterapia como PK y FK
      idfisioterapia2: fisioterapia, // Asignar la entidad Fisioterapia para la relación
      ...restOfDto,
    });

    return await this.tonomuscularRepository.save(tonomuscular);
  }

  // --- ¡NUEVO MÉTODO PARA OBTENER TODOS LOS REGISTROS! ---
  async findAll(): Promise<Tonomuscular[]> {
    return await this.tonomuscularRepository.find({
      relations: ['idfisioterapia2'], // Opcional: cargar la relación con Fisioterapia
    });
  }
  // --- FIN DEL NUEVO MÉTODO ---


  async findOne(idfisioterapia: number): Promise<Tonomuscular> {
    const tonomuscular = await this.tonomuscularRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
      relations: ['idfisioterapia2'], // Cargar la relación con Fisioterapia
    });

    if (!tonomuscular) {
      throw new NotFoundException(`Registro de Tono Muscular para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    return tonomuscular;
  }

  async update(idfisioterapia: number, updateTonoMuscularDto: UpdateTonoMuscularDto): Promise<Tonomuscular> {
    const tonomuscular = await this.tonomuscularRepository.findOne({ where: { idfisioterapia: idfisioterapia } });

    if (!tonomuscular) {
      throw new NotFoundException(`Registro de Tono Muscular para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // No permitimos actualizar idfisioterapia a través de updateTonoMuscularDto aquí
    // ya que es la clave primaria y el enlace. Si updateTonoMuscularDto.idfisioterapia existe, ignóralo o manéjalo.
    const { idfisioterapia: dtoIdfisioterapia, ...restOfDto } = updateTonoMuscularDto;

    Object.assign(tonomuscular, restOfDto); // Aplica solo los campos que no sean idfisioterapia

    return await this.tonomuscularRepository.save(tonomuscular);
  }

  async remove(idfisioterapia: number): Promise<void> {
    const result = await this.tonomuscularRepository.delete(idfisioterapia);

    if (result.affected === 0) {
      throw new NotFoundException(`Registro de Tono Muscular para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }
  }
}