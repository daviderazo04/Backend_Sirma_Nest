import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeneralDto } from './dto/create-general.dto';
import { UpdateGeneralDto } from './dto/update-general.dto';
import { General } from './entities/general.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class GeneralService {
  constructor(
    @InjectRepository(General)
    private generalRepository: Repository<General>,
    @Inject(forwardRef(() => MedicinaService))
    private medicinaService: MedicinaService,
  ) {}

  async create(createGeneralDto: CreateGeneralDto): Promise<General> {
    if (!createGeneralDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a General record.');
    }

    const medicina = await this.medicinaService.findOne(createGeneralDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createGeneralDto.idmedicina} not found.`);
    }

    const general = this.generalRepository.create({
      ...createGeneralDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.generalRepository.save(general);
  }

  async findAll(): Promise<General[]> {
    return await this.generalRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<General> {
    const general = await this.generalRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!general) {
      throw new NotFoundException(`General record with ID ${id} not found.`);
    }

    return general;
  }

  async update(id: number, updateGeneralDto: UpdateGeneralDto): Promise<General> {
    const general = await this.generalRepository.findOne({ where: { idmedicina: id } });

    if (!general) {
      throw new NotFoundException(`General record with ID ${id} not found.`);
    }

    Object.assign(general, updateGeneralDto);

    return await this.generalRepository.save(general);
  }

  async remove(id: number): Promise<General> {
    const general = await this.generalRepository.findOne({ where: { idmedicina: id } });

    if (!general) {
      throw new NotFoundException(`General record with ID ${id} not found.`);
    }

    return await this.generalRepository.remove(general);
  }
}