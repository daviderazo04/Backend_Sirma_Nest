// src/persona/persona.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { GrupoEdadDto } from './dto/grupo-edad.dto';

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
    const persona = await this.personaRepository.findOne({
      where: { idpersona: id },
    });
    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada.`);
    }
    return persona;
  }

  async update(
    id: number,
    updatePersonaDto: UpdatePersonaDto,
  ): Promise<Persona> {
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
  async findByCedula(cedula: string): Promise<Persona> {
    const persona = await this.personaRepository.findOne({
      where: { perCedula: cedula },
    });
    if (!persona) {
      throw new NotFoundException(
        `Persona con cédula ${cedula} no encontrada.`,
      );
    }
    return persona;
  }

  async obtenerGruposEdad(): Promise<GrupoEdadDto[]> {
    const result: unknown[] = await this.personaRepository.query(
      'CALL sp_ObtenerGruposEdad()',
    );

    // MySQL devuelve arrays anidados: [ [rows], ... ]
    const rows = Array.isArray(result[0])
      ? (result[0] as GrupoEdadDto[])
      : (result as GrupoEdadDto[]);

    if (!rows || rows.length === 0) {
      throw new NotFoundException(
        `No se encontraron datos de grupos de edad.`,
      );
    }

    return rows;
  }

  async personasPorSexo(): Promise<any[]> {
    const result = await this.personaRepository.query(
      'CALL sp_PersonasPorSexo()',
    );
    return result[0];
  }

  async personasPorEstadoCivil(): Promise<any[]> {
    const result = await this.personaRepository.query(
      'CALL sp_PersonasPorEstadoCivil()',
    );
    return result[0];
  }

  async personasPorZona(): Promise<any[]> {
    const result = await this.personaRepository.query(
      'CALL sp_PersonasPorZona()',
    );
    return result[0];
  }

  async personasPorOcupacion(): Promise<any[]> {
    const result = await this.personaRepository.query(
      'CALL sp_PersonasPorOcupacion()',
    );
    return result[0];
  }

  async personasPorInstruccion(): Promise<any[]> {
    const result = await this.personaRepository.query(
      'CALL sp_PersonasPorInstruccion()',
    );
    return result[0];
  }

  async personasPorComunidad(): Promise<any[]> {
    const result = await this.personaRepository.query(
      'CALL sp_PersonasPorComunidad()',
    );
    return result[0];
  }

  async personasPorCuidador(): Promise<any[]> {
    const result = await this.personaRepository.query(
      'CALL sp_PersonasPorCuidador()',
    );
    return result[0];
  }
}
