// src/fisioterapia/fisioterapia.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFisioterapiaDto } from './dto/create-fisioterapia.dto';
import { UpdateFisioterapiaDto } from './dto/update-fisioterapia.dto'; // You'll create this DTO later
import { Fisioterapia } from './entities/fisioterapia.entity';
import { PacienteService } from '../paciente/paciente.service'; // Import PacienteService

@Injectable()
export class FisioterapiaService {
  constructor(
    @InjectRepository(Fisioterapia)
    private fisioterapiaRepository: Repository<Fisioterapia>,
    private pacienteService: PacienteService, // Inject PacienteService
  ) {}

  async create(createFisioterapiaDto: CreateFisioterapiaDto): Promise<Fisioterapia> {
    if (!createFisioterapiaDto.idficha) {
      throw new NotFoundException('ID de Ficha (Paciente) es requerido para crear un registro de Fisioterapia.');
    }

    // Find the associated Paciente
    const paciente = await this.pacienteService.findOne(createFisioterapiaDto.idficha);

    if (!paciente) {
      throw new NotFoundException(`Paciente con ID de Ficha ${createFisioterapiaDto.idficha} no encontrado.`);
    }

    // Create the Fisioterapia entity
    const fisioterapia = this.fisioterapiaRepository.create({
      ...createFisioterapiaDto,
      idficha2: paciente, // Link to the Paciente entity
    });

    return await this.fisioterapiaRepository.save(fisioterapia);
  }

  async findAll(): Promise<Fisioterapia[]> {
    // Return all Fisioterapia records, loading the associated Paciente
    return await this.fisioterapiaRepository.find({
      relations: ['idficha2'],
    });
  }

  async findOne(id: number): Promise<Fisioterapia> {
    // Find a single Fisioterapia record by its primary key (idfisioterapia)
    const fisioterapia = await this.fisioterapiaRepository.findOne({
      where: { idfisioterapia: id },
      relations: ['idficha2'], // Load the associated Paciente
    });

    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${id} no encontrado.`);
    }

    return fisioterapia;
  }

  async update(id: number, updateFisioterapiaDto: UpdateFisioterapiaDto): Promise<Fisioterapia> {
    const fisioterapia = await this.fisioterapiaRepository.findOne({ where: { idfisioterapia: id } });

    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${id} no encontrado.`);
    }

    // Apply partial updates to the Fisioterapia entity
    Object.assign(fisioterapia, updateFisioterapiaDto);

    return await this.fisioterapiaRepository.save(fisioterapia);
  }

  async remove(id: number): Promise<Fisioterapia> {
    const fisioterapia = await this.fisioterapiaRepository.findOne({ where: { idfisioterapia: id } });

    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${id} no encontrado.`);
    }

    return await this.fisioterapiaRepository.remove(fisioterapia);
  }
}