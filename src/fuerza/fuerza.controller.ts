// src/fuerza/fuerza.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuerzaService } from './fuerza.service';
import { CreateFuerzaDto } from './dto/create-fuerza.dto';
import { UpdateFuerzaDto } from './dto/update-fuerza.dto';

@Controller('/api/fuerza') // Endpoint base para Fuerza
export class FuerzaController {
  constructor(private readonly fuerzaService: FuerzaService) {}

  @Post()
  async create(@Body() createFuerzaDto: CreateFuerzaDto) {
    return this.fuerzaService.create(createFuerzaDto);
  }

  @Get()
  async findAll() {
    return this.fuerzaService.findAll();
  }

  @Get(':idfisioterapia') // El ID en la URL es idfisioterapia
  async findOne(@Param('idfisioterapia') idfisioterapia: string) {
    return this.fuerzaService.findOne(+idfisioterapia);
  }

  @Patch(':idfisioterapia') // El ID en la URL es idfisioterapia
  async update(@Param('idfisioterapia') idfisioterapia: string, @Body() updateFuerzaDto: UpdateFuerzaDto) {
    return this.fuerzaService.update(+idfisioterapia, updateFuerzaDto);
  }

  @Delete(':idfisioterapia') // El ID en la URL es idfisioterapia
  async remove(@Param('idfisioterapia') idfisioterapia: string) {
    return this.fuerzaService.remove(+idfisioterapia);
  }
}