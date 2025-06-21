// src/persona-ficha/persona-ficha.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaFicha } from './entities/persona-ficha.entity';
import { CreatePersonaFichaDto } from './dto/create-persona-ficha.dto';
import { UpdatePersonaFichaDto } from './dto/update-persona-ficha.dto';

@Injectable()
export class PersonaFichaService {
  constructor(
    @InjectRepository(PersonaFicha)
    private readonly personaFichaRepository: Repository<PersonaFicha>,
  ) {}

  async create(
    createPersonaFichaDto: CreatePersonaFichaDto,
  ): Promise<PersonaFicha> {
    const personaFicha = this.personaFichaRepository.create(
      createPersonaFichaDto,
    );
    return await this.personaFichaRepository.save(personaFicha);
  }

  async findAll(): Promise<PersonaFicha[]> {
    return await this.personaFichaRepository.find({
      relations: ['idficha2', 'idpersona2'], // Carga las relaciones Paciente y Persona
    });
  }

  async findOne(id: number): Promise<PersonaFicha> {
    const personaFicha = await this.personaFichaRepository.findOne({
      where: { idpersonaficha: id },
      relations: ['idficha2', 'idpersona2'], // Carga las relaciones
    });
    if (!personaFicha) {
      throw new NotFoundException(`PersonaFicha con ID ${id} no encontrada.`);
    }
    return personaFicha;
  }

  async update(
    id: number,
    updatePersonaFichaDto: UpdatePersonaFichaDto,
  ): Promise<PersonaFicha> {
    const personaFicha = await this.findOne(id); // Reusa findOne para verificar existencia y cargar relaciones
    // Para actualizar las relaciones, TypeORM necesita que los IDs existan o que se pasen las entidades completas.
    // Como estamos pasando IDs en el DTO, TypeORM es inteligente y las asocia.
    Object.assign(personaFicha, updatePersonaFichaDto);
    return await this.personaFichaRepository.save(personaFicha);
  }

  async remove(id: number): Promise<void> {
    const result = await this.personaFichaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PersonaFicha con ID ${id} no encontrada.`);
    }
  }
}
