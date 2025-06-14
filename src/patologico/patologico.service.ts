import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatologicoDto } from './dto/create-patologico.dto';
import { UpdatePatologicoDto } from './dto/update-patologico.dto'; // Assuming you'll have an UpdatePatologicoDto
import { Patologico } from './entities/patologico.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class PatologicoService {
  constructor(
    @InjectRepository(Patologico)
    private patologicoRepository: Repository<Patologico>,
    @Inject(forwardRef(() => MedicinaService))
    private medicinaService: MedicinaService,
  ) {}

  async create(createPatologicoDto: CreatePatologicoDto): Promise<Patologico> {
    if (!createPatologicoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a Patologico record.');
    }

    const medicina = await this.medicinaService.findOne(createPatologicoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createPatologicoDto.idmedicina} not found.`);
    }

    const patologico = this.patologicoRepository.create({
      ...createPatologicoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.patologicoRepository.save(patologico);
  }

  async findAll(): Promise<Patologico[]> {
    return await this.patologicoRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Patologico> {
    const patologico = await this.patologicoRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!patologico) {
      throw new NotFoundException(`Patologico record with ID ${id} not found.`);
    }

    return patologico;
  }

  async update(id: number, updatePatologicoDto: UpdatePatologicoDto): Promise<Patologico> {
    const patologico = await this.patologicoRepository.findOne({ where: { idmedicina: id } });

    if (!patologico) {
      throw new NotFoundException(`Patologico record with ID ${id} not found.`);
    }

    Object.assign(patologico, updatePatologicoDto);

    return await this.patologicoRepository.save(patologico);
  }

  async remove(id: number): Promise<Patologico> {
    const patologico = await this.patologicoRepository.findOne({ where: { idmedicina: id } });

    if (!patologico) {
      throw new NotFoundException(`Patologico record with ID ${id} not found.`);
    }

    return await this.patologicoRepository.remove(patologico);
  }
}