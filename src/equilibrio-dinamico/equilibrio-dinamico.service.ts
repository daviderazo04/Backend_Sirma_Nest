// src/equilibrio-dinamico/equilibrio-dinamico.service.ts
import { forwardRef, Inject, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEquilibrioDinamicoDto } from './dto/create-equilibrio-dinamico.dto';
import { UpdateEquilibrioDinamicoDto } from './dto/update-equilibrio-dinamico.dto';
import { Equilibriodinamico } from './entities/equilibrio-dinamico.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service'; // Import FisioterapiaService

@Injectable()
export class EquilibrioDinamicoService {
  constructor(
    @InjectRepository(Equilibriodinamico)
    private equilibriodinamicoRepository: Repository<Equilibriodinamico>,
    // Usamos forwardRef para evitar problemas de dependencia circular
    @Inject(forwardRef(() => FisioterapiaService))
    private fisioterapiaService: FisioterapiaService,
  ) {}

  async create(createEquilibrioDinamicoDto: CreateEquilibrioDinamicoDto): Promise<Equilibriodinamico> {
    const { idfisioterapia, ...restOfDto } = createEquilibrioDinamicoDto;

    // 1. Verificar si el registro de Fisioterapia asociado existe
    const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // 2. Verificar si ya existe un registro de EquilibrioDinamico para esta Fisioterapia (relación OneToOne)
    const existingEquilibriodinamico = await this.equilibriodinamicoRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
    });

    if (existingEquilibriodinamico) {
      throw new ConflictException(`Ya existe un registro de Equilibrio Dinámico para la Fisioterapia con ID ${idfisioterapia}. Use PATCH para actualizarlo.`);
    }

    // 3. Crear el nuevo registro de EquilibrioDinamico
    const equilibriodinamico = this.equilibriodinamicoRepository.create({
      idfisioterapia: idfisioterapia, // Asignar el ID de Fisioterapia como PK y FK
      idfisioterapia2: fisioterapia,  // Asignar la entidad Fisioterapia para la relación
      ...restOfDto,
    });

    return await this.equilibriodinamicoRepository.save(equilibriodinamico);
  }

  async findAll(): Promise<Equilibriodinamico[]> {
    return await this.equilibriodinamicoRepository.find({
      relations: ['idfisioterapia2'], // Opcional: cargar la relación con Fisioterapia
    });
  }

  async findOne(idfisioterapia: number): Promise<Equilibriodinamico> {
    const equilibriodinamico = await this.equilibriodinamicoRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
      relations: ['idfisioterapia2'], // Cargar la relación con Fisioterapia
    });

    if (!equilibriodinamico) {
      throw new NotFoundException(`Registro de Equilibrio Dinámico para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    return equilibriodinamico;
  }

  async update(idfisioterapia: number, updateEquilibrioDinamicoDto: UpdateEquilibrioDinamicoDto): Promise<Equilibriodinamico> {
    const equilibriodinamico = await this.equilibriodinamicoRepository.findOne({ where: { idfisioterapia: idfisioterapia } });

    if (!equilibriodinamico) {
      throw new NotFoundException(`Registro de Equilibrio Dinámico para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // No permitimos actualizar idfisioterapia a través de updateEquilibrioDinamicoDto aquí
    const { idfisioterapia: dtoIdfisioterapia, ...restOfDto } = updateEquilibrioDinamicoDto;

    Object.assign(equilibriodinamico, restOfDto); // Aplica solo los campos que no sean idfisioterapia

    return await this.equilibriodinamicoRepository.save(equilibriodinamico);
  }

  async remove(idfisioterapia: number): Promise<void> {
    const result = await this.equilibriodinamicoRepository.delete(idfisioterapia);

    if (result.affected === 0) {
      throw new NotFoundException(`Registro de Equilibrio Dinámico para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }
  }
}