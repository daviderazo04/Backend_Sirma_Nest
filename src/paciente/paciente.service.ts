// src/paciente/paciente.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return await this.pacienteRepository.save(paciente);
  }

  async findAll(): Promise<Paciente[]> {
    return await this.pacienteRepository.find();
  }

  async findOne(idficha: string): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({
      where: { idficha },
    });
    if (!paciente) {
      throw new NotFoundException(
        `Paciente con ID de ficha "${idficha}" no encontrado.`,
      );
    }
    return paciente;
  }

  async update(
    idficha: string,
    updatePacienteDto: UpdatePacienteDto,
  ): Promise<Paciente> {
    const paciente = await this.findOne(idficha); // Reusa findOne para verificar existencia
    Object.assign(paciente, updatePacienteDto);
    return await this.pacienteRepository.save(paciente);
  }

  async remove(idficha: string): Promise<void> {
    const result = await this.pacienteRepository.delete(idficha);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Paciente con ID de ficha "${idficha}" no encontrado.`,
      );
    }
  }
}
