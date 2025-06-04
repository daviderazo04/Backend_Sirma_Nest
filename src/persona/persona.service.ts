// src/persona/persona.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const persona = this.personaRepository.create(createPersonaDto);
    return await this.personaRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return await this.personaRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.personaRepository.findOne({ where: { idpersona: id } });
    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada.`);
    }
    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const persona = await this.findOne(id); // Reusa findOne para verificar existencia
    Object.assign(persona, updatePersonaDto);
    return await this.personaRepository.save(persona);
  }

  async remove(id: number): Promise<void> {
    const result = await this.personaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada.`);
    }
  }
}