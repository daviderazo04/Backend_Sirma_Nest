// src/examen-sistemico/examen-sistemico.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamenSistemicoDto } from './dto/create-examen-sistemico.dto';
import { UpdateExamenSistemicoDto } from './dto/update-examen-sistemico.dto'; // Assuming you'll have an UpdateExamenSistemicoDto
import { Examensistemico } from './entities/examen-sistemico.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class ExamenSistemicoService {
  constructor(
    @InjectRepository(Examensistemico)
    private examenSistemicoRepository: Repository<Examensistemico>,
    private medicinaService: MedicinaService,
  ) {}

  async create(createExamenSistemicoDto: CreateExamenSistemicoDto): Promise<Examensistemico> {
    if (!createExamenSistemicoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create an Examen Sistemico record.');
    }

    const medicina = await this.medicinaService.findOne(createExamenSistemicoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createExamenSistemicoDto.idmedicina} not found.`);
    }

    const examenSistemico = this.examenSistemicoRepository.create({
      ...createExamenSistemicoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.examenSistemicoRepository.save(examenSistemico);
  }

  async findAll(): Promise<Examensistemico[]> {
    return await this.examenSistemicoRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Examensistemico> {
    const examenSistemico = await this.examenSistemicoRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!examenSistemico) {
      throw new NotFoundException(`Examen Sistemico record with ID ${id} not found.`);
    }

    return examenSistemico;
  }

  async update(id: number, updateExamenSistemicoDto: UpdateExamenSistemicoDto): Promise<Examensistemico> {
    const examenSistemico = await this.examenSistemicoRepository.findOne({ where: { idmedicina: id } });

    if (!examenSistemico) {
      throw new NotFoundException(`Examen Sistemico record with ID ${id} not found.`);
    }

    Object.assign(examenSistemico, updateExamenSistemicoDto);

    return await this.examenSistemicoRepository.save(examenSistemico);
  }

  async remove(id: number): Promise<Examensistemico> {
    const examenSistemico = await this.examenSistemicoRepository.findOne({ where: { idmedicina: id } });

    if (!examenSistemico) {
      throw new NotFoundException(`Examen Sistemico record with ID ${id} not found.`);
    }

    return await this.examenSistemicoRepository.remove(examenSistemico);
  }
}