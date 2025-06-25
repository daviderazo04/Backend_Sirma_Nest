// src/equilibrio-dinamico/equilibrio-dinamico.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquilibrioDinamicoService } from './equilibrio-dinamico.service';
import { CreateEquilibrioDinamicoDto } from './dto/create-equilibrio-dinamico.dto';
import { UpdateEquilibrioDinamicoDto } from './dto/update-equilibrio-dinamico.dto';

@Controller('/api/equilibrio-dinamico') // Endpoint base para EquilibrioDinamico
export class EquilibrioDinamicoController {
  constructor(private readonly equilibrioDinamicoService: EquilibrioDinamicoService) {}

  @Post()
  async create(@Body() createEquilibrioDinamicoDto: CreateEquilibrioDinamicoDto) {
    return this.equilibrioDinamicoService.create(createEquilibrioDinamicoDto);
  }

  @Get()
  async findAll() {
    return this.equilibrioDinamicoService.findAll();
  }

  @Get(':idfisioterapia') // El ID en la URL es idfisioterapia
  async findOne(@Param('idfisioterapia') idfisioterapia: string) {
    return this.equilibrioDinamicoService.findOne(+idfisioterapia);
  }

  @Patch(':idfisioterapia') // El ID en la URL es idfisioterapia
  async update(@Param('idfisioterapia') idfisioterapia: string, @Body() updateEquilibrioDinamicoDto: UpdateEquilibrioDinamicoDto) {
    return this.equilibrioDinamicoService.update(+idfisioterapia, updateEquilibrioDinamicoDto);
  }

  @Delete(':idfisioterapia') // El ID en la URL es idfisioterapia
  async remove(@Param('idfisioterapia') idfisioterapia: string) {
    return this.equilibrioDinamicoService.remove(+idfisioterapia);
  }
}