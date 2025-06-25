// src/fuerza/fuerza.service.ts
import { forwardRef, Inject, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFuerzaDto } from './dto/create-fuerza.dto';
import { UpdateFuerzaDto } from './dto/update-fuerza.dto';
import { Fuerza } from './entities/fuerza.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service'; // Import FisioterapiaService

@Injectable()
export class FuerzaService {
  constructor(
    @InjectRepository(Fuerza)
    private fuerzaRepository: Repository<Fuerza>,
    // Usamos forwardRef para evitar problemas de dependencia circular
    @Inject(forwardRef(() => FisioterapiaService))
    private fisioterapiaService: FisioterapiaService,
  ) {}

  async create(createFuerzaDto: CreateFuerzaDto): Promise<Fuerza> {
    const { idfisioterapia, ...restOfDto } = createFuerzaDto;

    // 1. Verificar si el registro de Fisioterapia asociado existe
    const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // 2. Verificar si ya existe un registro de Fuerza para esta Fisioterapia (relación OneToOne)
    const existingFuerza = await this.fuerzaRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
    });

    if (existingFuerza) {
      throw new ConflictException(`Ya existe un registro de Fuerza para la Fisioterapia con ID ${idfisioterapia}. Use PATCH para actualizarlo.`);
    }

    // 3. Crear el nuevo registro de Fuerza
    const fuerza = this.fuerzaRepository.create({
      idfisioterapia: idfisioterapia, // Asignar el ID de Fisioterapia como PK y FK
      idfisioterapia2: fisioterapia,  // Asignar la entidad Fisioterapia para la relación
      ...restOfDto,
    });

    return await this.fuerzaRepository.save(fuerza);
  }

  async findAll(): Promise<Fuerza[]> {
    return await this.fuerzaRepository.find({
      relations: ['idfisioterapia2'], // Opcional: cargar la relación con Fisioterapia
    });
  }

  async findOne(idfisioterapia: number): Promise<Fuerza> {
    const fuerza = await this.fuerzaRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
      relations: ['idfisioterapia2'], // Cargar la relación con Fisioterapia
    });

    if (!fuerza) {
      throw new NotFoundException(`Registro de Fuerza para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    return fuerza;
  }

  async update(idfisioterapia: number, updateFuerzaDto: UpdateFuerzaDto): Promise<Fuerza> {
    const fuerza = await this.fuerzaRepository.findOne({ where: { idfisioterapia: idfisioterapia } });

    if (!fuerza) {
      throw new NotFoundException(`Registro de Fuerza para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // No permitimos actualizar idfisioterapia a través de updateFuerzaDto aquí
    // ya que es la clave primaria y el enlace.
    const { idfisioterapia: dtoIdfisioterapia, ...restOfDto } = updateFuerzaDto;

    Object.assign(fuerza, restOfDto); // Aplica solo los campos que no sean idfisioterapia

    return await this.fuerzaRepository.save(fuerza);
  }

  async remove(idfisioterapia: number): Promise<void> {
    const result = await this.fuerzaRepository.delete(idfisioterapia);

    if (result.affected === 0) {
      throw new NotFoundException(`Registro de Fuerza para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }
  }
}