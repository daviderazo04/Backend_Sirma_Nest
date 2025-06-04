// personas.service.ts

import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> { // Añadir el tipo de retorno para claridad
    // 1. Crea una instancia de la entidad Persona a partir del DTO.
    const newPersona = this.personaRepository.create(createPersonaDto);

    // 2. Guarda la instancia en la base de datos.
    return await this.personaRepository.save(newPersona);
  }

  async findAll(): Promise<Persona[]> { // Añadir el tipo de retorno
    return await this.personaRepository.find();
  }

  async findOne(id: number) {
    // Para findOne, deberías usar findOne o findOneBy si estás en TypeORM >= 0.3.0
    // return await this.personaRepository.findOne(id); // deprecated
    return await this.personaRepository.findOneBy({ id: id }); // Mejor práctica
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    // Para update, primero buscas la entidad, la actualizas y luego la guardas.
    const personaToUpdate = await this.personaRepository.findOneBy({ id: id });
    if (!personaToUpdate) {
      throw new Error('Persona not found'); // O maneja el error como prefieras
    }
    this.personaRepository.merge(personaToUpdate, updatePersonaDto);
    return await this.personaRepository.save(personaToUpdate);
  }

  async remove(id: number) {
    // Para remove, buscas y eliminas.
    const personaToRemove = await this.personaRepository.findOneBy({ id: id });
    if (!personaToRemove) {
      throw new Error('Persona not found'); // O maneja el error como prefieras
    }
    await this.personaRepository.remove(personaToRemove);
    return `Persona con ID ${id} eliminada exitosamente.`;
  }
}