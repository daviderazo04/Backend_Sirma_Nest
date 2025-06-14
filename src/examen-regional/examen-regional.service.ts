// src/examen-regional/examen-regional.service.ts
import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamenRegionalDto } from './dto/create-examen-regional.dto';
import { UpdateExamenRegionalDto } from './dto/update-examen-regional.dto'; // Assuming you'll have an UpdateExamenRegionalDto
import { Examenregional } from './entities/examen-regional.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class ExamenRegionalService {
  constructor(
    @InjectRepository(Examenregional)
    private examenRegionalRepository: Repository<Examenregional>,
    @Inject(forwardRef(() => MedicinaService))
    private medicinaService: MedicinaService,
  ) {}

  async create(createExamenRegionalDto: CreateExamenRegionalDto): Promise<Examenregional> {
    if (!createExamenRegionalDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create an Examen Regional record.');
    }

    const medicina = await this.medicinaService.findOne(createExamenRegionalDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createExamenRegionalDto.idmedicina} not found.`);
    }

    const examenRegional = this.examenRegionalRepository.create({
      ...createExamenRegionalDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.examenRegionalRepository.save(examenRegional);
  }

  async findAll(): Promise<Examenregional[]> {
    return await this.examenRegionalRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Examenregional> {
    const examenRegional = await this.examenRegionalRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!examenRegional) {
      throw new NotFoundException(`Examen Regional record with ID ${id} not found.`);
    }

    return examenRegional;
  }

  async update(id: number, updateExamenRegionalDto: UpdateExamenRegionalDto): Promise<Examenregional> {
    const examenRegional = await this.examenRegionalRepository.findOne({ where: { idmedicina: id } });

    if (!examenRegional) {
      throw new NotFoundException(`Examen Regional record with ID ${id} not found.`);
    }

    Object.assign(examenRegional, updateExamenRegionalDto);

    return await this.examenRegionalRepository.save(examenRegional);
  }

  async remove(id: number): Promise<Examenregional> {
    const examenRegional = await this.examenRegionalRepository.findOne({ where: { idmedicina: id } });

    if (!examenRegional) {
      throw new NotFoundException(`Examen Regional record with ID ${id} not found.`);
    }

    return await this.examenRegionalRepository.remove(examenRegional);
  }
}