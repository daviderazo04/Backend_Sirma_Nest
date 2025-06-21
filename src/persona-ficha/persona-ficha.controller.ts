// src/persona-ficha/persona-ficha.controller.ts
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
import { PersonaFichaService } from './persona-ficha.service';
import { CreatePersonaFichaDto } from './dto/create-persona-ficha.dto';
import { UpdatePersonaFichaDto } from './dto/update-persona-ficha.dto';
import { PersonaFicha } from './entities/persona-ficha.entity';

@Controller('api/persona-fichas')
export class PersonaFichaController {
  constructor(private readonly personaFichaService: PersonaFichaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createPersonaFichaDto: CreatePersonaFichaDto,
  ): Promise<PersonaFicha> {
    return await this.personaFichaService.create(createPersonaFichaDto);
  }

  @Get()
  async findAll(): Promise<PersonaFicha[]> {
    return await this.personaFichaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PersonaFicha> {
    return await this.personaFichaService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonaFichaDto: UpdatePersonaFichaDto,
  ): Promise<PersonaFicha> {
    return await this.personaFichaService.update(+id, updatePersonaFichaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminación exitosa
  async remove(@Param('id') id: string): Promise<void> {
    await this.personaFichaService.remove(+id);
  }
}
