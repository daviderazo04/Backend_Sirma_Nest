// src/ginecologico/ginecologico.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGinecologicoDto } from './dto/create-ginecologico.dto';
import { UpdateGinecologicoDto } from './dto/update-ginecologico.dto'; // Assuming you'll have an UpdateGinecologicoDto
import { Ginecologico } from './entities/ginecologico.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class GinecologicoService {
  constructor(
    @InjectRepository(Ginecologico)
    private ginecologicoRepository: Repository<Ginecologico>,
    private medicinaService: MedicinaService,
  ) {}

  async create(createGinecologicoDto: CreateGinecologicoDto): Promise<Ginecologico> {
    if (!createGinecologicoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a Ginecologico record.');
    }

    const medicina = await this.medicinaService.findOne(createGinecologicoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createGinecologicoDto.idmedicina} not found.`);
    }

    const ginecologico = this.ginecologicoRepository.create({
      ...createGinecologicoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.ginecologicoRepository.save(ginecologico);
  }

  async findAll(): Promise<Ginecologico[]> {
    return await this.ginecologicoRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Ginecologico> {
    const ginecologico = await this.ginecologicoRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!ginecologico) {
      throw new NotFoundException(`Ginecologico record with ID ${id} not found.`);
    }

    return ginecologico;
  }

  async update(id: number, updateGinecologicoDto: UpdateGinecologicoDto): Promise<Ginecologico> {
    const ginecologico = await this.ginecologicoRepository.findOne({ where: { idmedicina: id } });

    if (!ginecologico) {
      throw new NotFoundException(`Ginecologico record with ID ${id} not found.`);
    }

    Object.assign(ginecologico, updateGinecologicoDto);

    return await this.ginecologicoRepository.save(ginecologico);
  }

  async remove(id: number): Promise<Ginecologico> {
    const ginecologico = await this.ginecologicoRepository.findOne({ where: { idmedicina: id } });

    if (!ginecologico) {
      throw new NotFoundException(`Ginecologico record with ID ${id} not found.`);
    }

    return await this.ginecologicoRepository.remove(ginecologico);
  }
}