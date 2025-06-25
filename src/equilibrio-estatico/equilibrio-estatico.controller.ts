// src/equilibrio-estatico/equilibrio-estatico.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquilibrioEstaticoService } from './equilibrio-estatico.service';
import { CreateEquilibrioEstaticoDto } from './dto/create-equilibrio-estatico.dto';
import { UpdateEquilibrioEstaticoDto } from './dto/update-equilibrio-estatico.dto';

@Controller('/api/equilibrio-estatico') // Endpoint base para EquilibrioEstatico
export class EquilibrioEstaticoController {
  constructor(private readonly equilibrioEstaticoService: EquilibrioEstaticoService) {}

  @Post()
  async create(@Body() createEquilibrioEstaticoDto: CreateEquilibrioEstaticoDto) {
    return this.equilibrioEstaticoService.create(createEquilibrioEstaticoDto);
  }

  @Get()
  async findAll() {
    return this.equilibrioEstaticoService.findAll();
  }

  @Get(':idfisioterapia') // El ID en la URL es idfisioterapia
  async findOne(@Param('idfisioterapia') idfisioterapia: string) {
    return this.equilibrioEstaticoService.findOne(+idfisioterapia);
  }

  @Patch(':idfisioterapia') // El ID en la URL es idfisioterapia
  async update(@Param('idfisioterapia') idfisioterapia: string, @Body() updateEquilibrioEstaticoDto: UpdateEquilibrioEstaticoDto) {
    return this.equilibrioEstaticoService.update(+idfisioterapia, updateEquilibrioEstaticoDto);
  }

  @Delete(':idfisioterapia') // El ID en la URL es idfisioterapia
  async remove(@Param('idfisioterapia') idfisioterapia: string) {
    return this.equilibrioEstaticoService.remove(+idfisioterapia);
  }
}