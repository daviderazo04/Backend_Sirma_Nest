// src/sindromes-geriatricos/sindromes-geriatricos.service.ts
import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSindromesGeriatricoDto } from './dto/create-sindromes-geriatrico.dto';
import { UpdateSindromesGeriatricoDto } from './dto/update-sindromes-geriatrico.dto'; // Assuming you'll have an UpdateSindromesGeriatricoDto
import { Sindromesgeriatricos } from './entities/sindromes-geriatrico.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class SindromesGeriatricosService {
  constructor(
    @InjectRepository(Sindromesgeriatricos)
    private sindromesGeriatricosRepository: Repository<Sindromesgeriatricos>,
    @Inject(forwardRef(() => MedicinaService))
    private medicinaService: MedicinaService,
  ) {}

  async create(createSindromesGeriatricoDto: CreateSindromesGeriatricoDto): Promise<Sindromesgeriatricos> {
    if (!createSindromesGeriatricoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a Sindromes Geriatrico record.');
    }

    const medicina = await this.medicinaService.findOne(createSindromesGeriatricoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createSindromesGeriatricoDto.idmedicina} not found.`);
    }

    const sindromesGeriatricos = this.sindromesGeriatricosRepository.create({
      ...createSindromesGeriatricoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.sindromesGeriatricosRepository.save(sindromesGeriatricos);
  }

  async findAll(): Promise<Sindromesgeriatricos[]> {
    return await this.sindromesGeriatricosRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Sindromesgeriatricos> {
    const sindromesGeriatricos = await this.sindromesGeriatricosRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!sindromesGeriatricos) {
      throw new NotFoundException(`Sindromes Geriatrico record with ID ${id} not found.`);
    }

    return sindromesGeriatricos;
  }

  async update(id: number, updateSindromesGeriatricoDto: UpdateSindromesGeriatricoDto): Promise<Sindromesgeriatricos> {
    const sindromesGeriatricos = await this.sindromesGeriatricosRepository.findOne({ where: { idmedicina: id } });

    if (!sindromesGeriatricos) {
      throw new NotFoundException(`Sindromes Geriatrico record with ID ${id} not found.`);
    }

    Object.assign(sindromesGeriatricos, updateSindromesGeriatricoDto);

    return await this.sindromesGeriatricosRepository.save(sindromesGeriatricos);
  }

  async remove(id: number): Promise<Sindromesgeriatricos> {
    const sindromesGeriatricos = await this.sindromesGeriatricosRepository.findOne({ where: { idmedicina: id } });

    if (!sindromesGeriatricos) {
      throw new NotFoundException(`Sindromes Geriatrico record with ID ${id} not found.`);
    }

    return await this.sindromesGeriatricosRepository.remove(sindromesGeriatricos);
  }
}