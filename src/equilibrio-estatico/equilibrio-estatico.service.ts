// src/equilibrio-estatico/equilibrio-estatico.service.ts
import { forwardRef, Inject, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEquilibrioEstaticoDto } from './dto/create-equilibrio-estatico.dto';
import { UpdateEquilibrioEstaticoDto } from './dto/update-equilibrio-estatico.dto';
import { Equilibrioestatico } from './entities/equilibrio-estatico.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service'; // Import FisioterapiaService

@Injectable()
export class EquilibrioEstaticoService {
  constructor(
    @InjectRepository(Equilibrioestatico)
    private equilibrioestaticoRepository: Repository<Equilibrioestatico>,
    // Usamos forwardRef para evitar problemas de dependencia circular
    @Inject(forwardRef(() => FisioterapiaService))
    private fisioterapiaService: FisioterapiaService,
  ) {}

  async create(createEquilibrioEstaticoDto: CreateEquilibrioEstaticoDto): Promise<Equilibrioestatico> {
    const { idfisioterapia, ...restOfDto } = createEquilibrioEstaticoDto;

    // 1. Verificar si el registro de Fisioterapia asociado existe
    const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // 2. Verificar si ya existe un registro de EquilibrioEstatico para esta Fisioterapia (relación OneToOne)
    const existingEquilibrioestatico = await this.equilibrioestaticoRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
    });

    if (existingEquilibrioestatico) {
      throw new ConflictException(`Ya existe un registro de Equilibrio Estático para la Fisioterapia con ID ${idfisioterapia}. Use PATCH para actualizarlo.`);
    }

    // 3. Crear el nuevo registro de EquilibrioEstatico
    const equilibrioestatico = this.equilibrioestaticoRepository.create({
      idfisioterapia: idfisioterapia, // Asignar el ID de Fisioterapia como PK y FK
      idfisioterapia2: fisioterapia,  // Asignar la entidad Fisioterapia para la relación
      ...restOfDto,
    });

    return await this.equilibrioestaticoRepository.save(equilibrioestatico);
  }

  async findAll(): Promise<Equilibrioestatico[]> {
    return await this.equilibrioestaticoRepository.find({
      relations: ['idfisioterapia2'], // Opcional: cargar la relación con Fisioterapia
    });
  }

  async findOne(idfisioterapia: number): Promise<Equilibrioestatico> {
    const equilibrioestatico = await this.equilibrioestaticoRepository.findOne({
      where: { idfisioterapia: idfisioterapia },
      relations: ['idfisioterapia2'], // Cargar la relación con Fisioterapia
    });

    if (!equilibrioestatico) {
      throw new NotFoundException(`Registro de Equilibrio Estático para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    return equilibrioestatico;
  }

  async update(idfisioterapia: number, updateEquilibrioEstaticoDto: UpdateEquilibrioEstaticoDto): Promise<Equilibrioestatico> {
    const equilibrioestatico = await this.equilibrioestaticoRepository.findOne({ where: { idfisioterapia: idfisioterapia } });

    if (!equilibrioestatico) {
      throw new NotFoundException(`Registro de Equilibrio Estático para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // No permitimos actualizar idfisioterapia a través de updateEquilibrioEstaticoDto aquí
    const { idfisioterapia: dtoIdfisioterapia, ...restOfDto } = updateEquilibrioEstaticoDto;

    Object.assign(equilibrioestatico, restOfDto); // Aplica solo los campos que no sean idfisioterapia

    return await this.equilibrioestaticoRepository.save(equilibrioestatico);
  }

  async remove(idfisioterapia: number): Promise<void> {
    const result = await this.equilibrioestaticoRepository.delete(idfisioterapia);

    if (result.affected === 0) {
      throw new NotFoundException(`Registro de Equilibrio Estático para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }
  }
}