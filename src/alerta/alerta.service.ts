import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { Alerta } from './entities/alerta.entity';
import { MedicinaService } from '../medicina/medicina.service'; // Import MedicinaService

@Injectable()
export class AlertaService {
  constructor(
    @InjectRepository(Alerta)
    private alertaRepository: Repository<Alerta>,
    @Inject(forwardRef(() => MedicinaService))
    private medicinaService: MedicinaService,
  ) {}

  async create(createAlertaDto: CreateAlertaDto): Promise<Alerta> {
    if (!createAlertaDto.idmedicina) {
      throw new NotFoundException('Medicina ID is required to create an Alerta record.');
    }

    const medicina = await this.medicinaService.findOne(createAlertaDto.idmedicina);

    if (!medicina) {
      throw new NotFoundException(`Medicina with ID ${createAlertaDto.idmedicina} not found.`);
    }

    const alerta = this.alertaRepository.create({
      ...createAlertaDto,
      idmedicina2: medicina, // Link to the Medicina entity
    });

    return await this.alertaRepository.save(alerta);
  }

  async findAll(): Promise<Alerta[]> {
    return await this.alertaRepository.find({
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });
  }

  async findOne(id: number): Promise<Alerta> {
    const alerta = await this.alertaRepository.findOne({
      where: { idmedicina: id },
      relations: ['idmedicina2'], // Load the associated Medicina entity
    });

    if (!alerta) {
      throw new NotFoundException(`Alerta record with ID ${id} not found.`);
    }

    return alerta;
  }

  async update(id: number, updateAlertaDto: UpdateAlertaDto): Promise<Alerta> {
    const alerta = await this.alertaRepository.findOne({ where: { idmedicina: id } });

    if (!alerta) {
      throw new NotFoundException(`Alerta record with ID ${id} not found.`);
    }

    Object.assign(alerta, updateAlertaDto);

    return await this.alertaRepository.save(alerta);
  }

  async remove(id: number): Promise<Alerta> {
    const alerta = await this.alertaRepository.findOne({ where: { idmedicina: id } });

    if (!alerta) {
      throw new NotFoundException(`Alerta record with ID ${id} not found.`);
    }

    return await this.alertaRepository.remove(alerta);
  }
}