// src/zonadolor/zonadolor.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZonadolorService } from './zonadolor.service';
import { CreateZonadolorDto } from './dto/create-zonadolor.dto';
import { UpdateZonadolorDto } from './dto/update-zonadolor.dto';

@Controller('/api/zonadolor') // Endpoint base para Zonadolor
export class ZonadolorController {
  constructor(private readonly zonadolorService: ZonadolorService) {}

  @Post()
  async create(@Body() createZonadolorDto: CreateZonadolorDto) {
    return this.zonadolorService.create(createZonadolorDto);
  }

  @Get()
  async findAll() {
    return this.zonadolorService.findAll();
  }

  @Get(':id') // El ID en la URL es idzona
  async findOne(@Param('id') id: string) {
    return this.zonadolorService.findOne(+id); // Convertir a número
  }

  @Patch(':id') // El ID en la URL es idzona
  async update(@Param('id') id: string, @Body() updateZonadolorDto: UpdateZonadolorDto) {
    return this.zonadolorService.update(+id, updateZonadolorDto); // Convertir a número
  }

  @Delete(':id') // El ID en la URL es idzona
  async remove(@Param('id') id: string) {
    return this.zonadolorService.remove(+id); // Convertir a número
  }
}