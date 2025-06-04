// src/persona/persona.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
// Make sure persona.service.ts exists in the same directory.
// If it exists elsewhere, update the import path accordingly.
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';

@Controller('api/personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPersonaDto: CreatePersonaDto): Promise<Persona> {
    return await this.personaService.create(createPersonaDto);
  }

  @Get()
  async findAll(): Promise<Persona[]> {
    return await this.personaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Persona> {
    return await this.personaService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonaDto: UpdatePersonaDto,
  ): Promise<Persona> {
    return await this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminación exitosa
  async remove(@Param('id') id: string): Promise<void> {
    await this.personaService.remove(+id);
  }
}