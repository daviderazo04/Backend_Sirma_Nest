// src/dolor-fisio/dolor-fisio.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DolorFisioService } from './dolor-fisio.service';
import { CreateDolorFisioDto } from './dto/create-dolor-fisio.dto';
import { UpdateDolorFisioDto } from './dto/update-dolor-fisio.dto';

@Controller('/api/dolor-fisio') // Endpoint base para DolorFisio
export class DolorFisioController {
  constructor(private readonly dolorFisioService: DolorFisioService) {}

  @Post()
  async create(@Body() createDolorFisioDto: CreateDolorFisioDto) {
    return this.dolorFisioService.create(createDolorFisioDto);
  }

  @Get()
  async findAll() {
    return this.dolorFisioService.findAll();
  }

  @Get(':id') // El ID en la URL es iddolorfisio
  async findOne(@Param('id') id: string) {
    return this.dolorFisioService.findOne(+id); // Convertir a número
  }

  @Patch(':id') // El ID en la URL es iddolorfisio
  async update(@Param('id') id: string, @Body() updateDolorFisioDto: UpdateDolorFisioDto) {
    return this.dolorFisioService.update(+id, updateDolorFisioDto); // Convertir a número
  }

  @Delete(':id') // El ID en la URL es iddolorfisio
  async remove(@Param('id') id: string) {
    return this.dolorFisioService.remove(+id); // Convertir a número
  }
}