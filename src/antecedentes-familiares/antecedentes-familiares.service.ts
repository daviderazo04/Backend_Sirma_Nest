// src/antecedentes-familiares/antecedentes-familiares.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAntecedentesFamiliareDto } from './dto/create-antecedentes-familiare.dto'; // Corrected DTO import
import { UpdateAntecedentesFamiliareDto } from './dto/update-antecedentes-familiare.dto'; // Assuming you'll have an UpdateAntecedentesfamiliaresDto
import { Antecedentesfamiliares } from './entities/antecedentes-familiare.entity';
import { MedicinaService } from '../medicina/medicina.service';

@Injectable()
export class AntecedentesfamiliaresService {
  constructor(
    @InjectRepository(Antecedentesfamiliares)
    private antecedentesfamiliaresRepository: Repository<Antecedentesfamiliares>,
    private medicinaService: MedicinaService,
  ) {}

  async create(createAntecedentesFamiliareDto: CreateAntecedentesFamiliareDto): Promise<Antecedentesfamiliares> { // Corrected DTO type
    if (!createAntecedentesFamiliareDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create an AntecedentesFamiliares record.');
    }

    const medicina = await this.medicinaService.findOne(createAntecedentesFamiliareDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createAntecedentesFamiliareDto.idmedicina} not found.`);
    }

    const antecedentesfamiliares = this.antecedentesfamiliaresRepository.create({
      ...createAntecedentesFamiliareDto,
      idmedicina2: medicina,
    });

    return await this.antecedentesfamiliaresRepository.save(antecedentesfamiliares);
  }

  async findAll(): Promise<Antecedentesfamiliares[]> {
    return await this.antecedentesfamiliaresRepository.find({
      relations: ['idmedicina2'],
    });
  }

  async findOne(id: number): Promise<Antecedentesfamiliares> {
    const antecedentesfamiliares = await this.antecedentesfamiliaresRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'],
    });

    if (!antecedentesfamiliares) {
      throw new NotFoundException(`AntecedentesFamiliares record with ID ${id} not found.`);
    }

    return antecedentesfamiliares;
  }

  async update(id: number, updateAntecedentesfamiliaresDto: UpdateAntecedentesFamiliareDto): Promise<Antecedentesfamiliares> {
    const antecedentesfamiliares = await this.antecedentesfamiliaresRepository.findOne({ where: { idmedicina: id } });

    if (!antecedentesfamiliares) {
      throw new NotFoundException(`AntecedentesFamiliares record with ID ${id} not found.`);
    }

    Object.assign(antecedentesfamiliares, updateAntecedentesfamiliaresDto);

    return await this.antecedentesfamiliaresRepository.save(antecedentesfamiliares);
  }

  async remove(id: number): Promise<Antecedentesfamiliares> {
    const antecedentesfamiliares = await this.antecedentesfamiliaresRepository.findOne({ where: { idmedicina: id } });

    if (!antecedentesfamiliares) {
      throw new NotFoundException(`AntecedentesFamiliares record with ID ${id} not found.`);
    }

    return await this.antecedentesfamiliaresRepository.remove(antecedentesfamiliares);
  }
}