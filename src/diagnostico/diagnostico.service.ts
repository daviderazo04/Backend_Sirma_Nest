// src/diagnostico/diagnostico.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto'; // Assuming you'll have an UpdateDiagnosticoDto
import { Diagnostico } from './entities/diagnostico.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class DiagnosticoService {
  constructor(
    @InjectRepository(Diagnostico)
    private diagnosticoRepository: Repository<Diagnostico>,
    private medicinaService: MedicinaService,
  ) {}

  async create(createDiagnosticoDto: CreateDiagnosticoDto): Promise<Diagnostico> {
    if (!createDiagnosticoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a Diagnostico record.');
    }

    const medicina = await this.medicinaService.findOne(createDiagnosticoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createDiagnosticoDto.idmedicina} not found.`);
    }

    const diagnostico = this.diagnosticoRepository.create({
      ...createDiagnosticoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.diagnosticoRepository.save(diagnostico);
  }

  async findAll(): Promise<Diagnostico[]> {
    return await this.diagnosticoRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Diagnostico> {
    const diagnostico = await this.diagnosticoRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!diagnostico) {
      throw new NotFoundException(`Diagnostico record with ID ${id} not found.`);
    }

    return diagnostico;
  }

  async update(id: number, updateDiagnosticoDto: UpdateDiagnosticoDto): Promise<Diagnostico> {
    const diagnostico = await this.diagnosticoRepository.findOne({ where: { idmedicina: id } });

    if (!diagnostico) {
      throw new NotFoundException(`Diagnostico record with ID ${id} not found.`);
    }

    Object.assign(diagnostico, updateDiagnosticoDto);

    return await this.diagnosticoRepository.save(diagnostico);
  }

  async remove(id: number): Promise<Diagnostico> {
    const diagnostico = await this.diagnosticoRepository.findOne({ where: { idmedicina: id } });

    if (!diagnostico) {
      throw new NotFoundException(`Diagnostico record with ID ${id} not found.`);
    }

    return await this.diagnosticoRepository.remove(diagnostico);
  }
}