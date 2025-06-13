// src/farmacologico/farmacologico.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFarmacologicoDto } from './dto/create-farmacologico.dto';
import { UpdateFarmacologicoDto } from './dto/update-farmacologico.dto'; // Assuming you'll have an UpdateFarmacologicoDto
import { Farmacologico } from './entities/farmacologico.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class FarmacologicoService {
  constructor(
    @InjectRepository(Farmacologico)
    private farmacologicoRepository: Repository<Farmacologico>,
    private medicinaService: MedicinaService,
  ) {}

  async create(createFarmacologicoDto: CreateFarmacologicoDto): Promise<Farmacologico> {
    if (!createFarmacologicoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a Farmacologico record.');
    }

    const medicina = await this.medicinaService.findOne(createFarmacologicoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createFarmacologicoDto.idmedicina} not found.`);
    }

    const farmacologico = this.farmacologicoRepository.create({
      ...createFarmacologicoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.farmacologicoRepository.save(farmacologico);
  }

  async findAll(): Promise<Farmacologico[]> {
    return await this.farmacologicoRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Farmacologico> {
    const farmacologico = await this.farmacologicoRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!farmacologico) {
      throw new NotFoundException(`Farmacologico record with ID ${id} not found.`);
    }

    return farmacologico;
  }

  async update(id: number, updateFarmacologicoDto: UpdateFarmacologicoDto): Promise<Farmacologico> {
    const farmacologico = await this.farmacologicoRepository.findOne({ where: { idmedicina: id } });

    if (!farmacologico) {
      throw new NotFoundException(`Farmacologico record with ID ${id} not found.`);
    }

    Object.assign(farmacologico, updateFarmacologicoDto);

    return await this.farmacologicoRepository.save(farmacologico);
  }

  async remove(id: number): Promise<Farmacologico> {
    const farmacologico = await this.farmacologicoRepository.findOne({ where: { idmedicina: id } });

    if (!farmacologico) {
      throw new NotFoundException(`Farmacologico record with ID ${id} not found.`);
    }

    return await this.farmacologicoRepository.remove(farmacologico);
  }
}