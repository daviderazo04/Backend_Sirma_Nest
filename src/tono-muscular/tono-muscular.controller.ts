// src/tono-muscular/tono-muscular.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TonoMuscularService } from './tono-muscular.service';
import { CreateTonoMuscularDto } from './dto/create-tono-muscular.dto';
import { UpdateTonoMuscularDto } from './dto/update-tono-muscular.dto';

@Controller('/api/tono-muscular') // Endpoint base para TonoMuscular
export class TonoMuscularController {
  constructor(private readonly tonoMuscularService: TonoMuscularService) {}

  @Post()
  async create(@Body() createTonoMuscularDto: CreateTonoMuscularDto) {
    return this.tonoMuscularService.create(createTonoMuscularDto);
  }

  @Get() // <-- ¡NUEVO MÉTODO PARA VER TODOS LOS REGISTROS!
  async findAll() {
    return this.tonoMuscularService.findAll();
  }

  @Get(':idfisioterapia') // El ID en la URL es idfisioterapia
  async findOne(@Param('idfisioterapia') idfisioterapia: string) {
    return this.tonoMuscularService.findOne(+idfisioterapia);
  }

  @Patch(':idfisioterapia') // El ID en la URL es idfisioterapia
  async update(@Param('idfisioterapia') idfisioterapia: string, @Body() updateTonoMuscularDto: UpdateTonoMuscularDto) {
    return this.tonoMuscularService.update(+idfisioterapia, updateTonoMuscularDto);
  }

  @Delete(':idfisioterapia') // El ID en la URL es idfisioterapia
  async remove(@Param('idfisioterapia') idfisioterapia: string) {
    return this.tonoMuscularService.remove(+idfisioterapia);
  }
}