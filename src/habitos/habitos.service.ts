import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto'; // Assuming you'll have an UpdateHabitoDto
import { Habitos } from './entities/habito.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class HabitoService {
  constructor(
    @InjectRepository(Habitos)
    private habitosRepository: Repository<Habitos>,
    @Inject(forwardRef(() => MedicinaService))
    private medicinaService: MedicinaService,
  ) {}

  async create(createHabitoDto: CreateHabitoDto): Promise<Habitos> {
    if (!createHabitoDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a Habito record.');
    }

    const medicina = await this.medicinaService.findOne(createHabitoDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createHabitoDto.idmedicina} not found.`);
    }

    const habitos = this.habitosRepository.create({
      ...createHabitoDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.habitosRepository.save(habitos);
  }

  async findAll(): Promise<Habitos[]> {
    return await this.habitosRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Habitos> {
    const habitos = await this.habitosRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!habitos) {
      throw new NotFoundException(`Habito record with ID ${id} not found.`);
    }

    return habitos;
  }

  async update(id: number, updateHabitoDto: UpdateHabitoDto): Promise<Habitos> {
    const habitos = await this.habitosRepository.findOne({ where: { idmedicina: id } });

    if (!habitos) {
      throw new NotFoundException(`Habito record with ID ${id} not found.`);
    }

    Object.assign(habitos, updateHabitoDto);

    return await this.habitosRepository.save(habitos);
  }

  async remove(id: number): Promise<Habitos> {
    const habitos = await this.habitosRepository.findOne({ where: { idmedicina: id } });

    if (!habitos) {
      throw new NotFoundException(`Habito record with ID ${id} not found.`);
    }

    return await this.habitosRepository.remove(habitos);
  }
}