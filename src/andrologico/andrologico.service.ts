// src/andrologico/andrologico.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAndrologicoDto } from './dto/create-andrologico.dto';
import { UpdateAndrologicoDto } from './dto/update-andrologico.dto'; // Assuming you'll have an UpdateAndrologicoDto
import { Andrologico } from './entities/andrologico.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class AndrologicoService {
  constructor(
    @InjectRepository(Andrologico)
    private andrologicoRepository: Repository<Andrologico>,
    private medicinaService: MedicinaService,
  ) {}

  async create(createAndrologicoDto: CreateAndrologicoDto): Promise<Andrologico> {
    if (!createAndrologicoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create an Andrologico record.');
    }

    const medicina = await this.medicinaService.findOne(createAndrologicoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createAndrologicoDto.idmedicina} not found.`);
    }

    const andrologico = this.andrologicoRepository.create({
      ...createAndrologicoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.andrologicoRepository.save(andrologico);
  }

  async findAll(): Promise<Andrologico[]> {
    return await this.andrologicoRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Andrologico> {
    const andrologico = await this.andrologicoRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!andrologico) {
      throw new NotFoundException(`Andrologico record with ID ${id} not found.`);
    }

    return andrologico;
  }

  async update(id: number, updateAndrologicoDto: UpdateAndrologicoDto): Promise<Andrologico> {
    const andrologico = await this.andrologicoRepository.findOne({ where: { idmedicina: id } });

    if (!andrologico) {
      throw new NotFoundException(`Andrologico record with ID ${id} not found.`);
    }

    Object.assign(andrologico, updateAndrologicoDto);

    return await this.andrologicoRepository.save(andrologico);
  }

  async remove(id: number): Promise<Andrologico> {
    const andrologico = await this.andrologicoRepository.findOne({ where: { idmedicina: id } });

    if (!andrologico) {
      throw new NotFoundException(`Andrologico record with ID ${id} not found.`);
    }

    return await this.andrologicoRepository.remove(andrologico);
  }
}