import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRevisionActualDto } from './dto/create-revision-actual.dto';
import { UpdateRevisionActualDto } from './dto/update-revision-actual.dto';
import { Revisionactual } from './entities/revision-actual.entity';
import { MedicinaService } from '../medicina/medicina.service';

@Injectable()
export class RevisionActualService {
  constructor(
    @InjectRepository(Revisionactual)
    private revisionactualRepository: Repository<Revisionactual>,
    @Inject(forwardRef(() => MedicinaService))
    private medicinaService: MedicinaService,
  ) {}
  
  async create(createRevisionactualDto: CreateRevisionActualDto): Promise<Revisionactual> {
    if (!createRevisionactualDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create a Revision Actual record.');
    }

    const medicina = await this.medicinaService.findOne(createRevisionactualDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createRevisionactualDto.idmedicina} not found.`);
    }

    const revisionactual = this.revisionactualRepository.create({
      ...createRevisionactualDto,
      idmedicina2: medicina,
    });

    return await this.revisionactualRepository.save(revisionactual);
  }

  async findAll(): Promise<Revisionactual[]> {
    return await this.revisionactualRepository.find({
      relations: ['idmedicina2'],
    });
  }

  async findOne(id: number): Promise<Revisionactual> {
    const revisionactual = await this.revisionactualRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'],
    });

    if (!revisionactual) {
      throw new NotFoundException(`Revision Actual with ID ${id} not found.`);
    }

    return revisionactual;
  }

  async update(id: number, updateRevisionactualDto: UpdateRevisionActualDto): Promise<Revisionactual> {
    const revisionactual = await this.revisionactualRepository.findOne({ where: { idmedicina: id } });

    if (!revisionactual) {
      throw new NotFoundException(`Revision Actual with ID ${id} not found.`);
    }

    Object.assign(revisionactual, updateRevisionactualDto);

    return await this.revisionactualRepository.save(revisionactual);
  }

  async remove(id: number): Promise<Revisionactual> {
    const revisionactual = await this.revisionactualRepository.findOne({ where: { idmedicina: id } });

    if (!revisionactual) {
      throw new NotFoundException(`Revision Actual with ID ${id} not found.`);
    }

    return await this.revisionactualRepository.remove(revisionactual);
  }
}
