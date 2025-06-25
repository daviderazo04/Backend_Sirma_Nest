// src/fisioterapia/fisioterapia.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FisioterapiaService } from './fisioterapia.service';
import { CreateFisioterapiaDto } from './dto/create-fisioterapia.dto';
import { UpdateFisioterapiaDto } from './dto/update-fisioterapia.dto'; // You'll create this DTO later

@Controller('/api/fisioterapia') // Base path for this module's endpoints
export class FisioterapiaController {
  constructor(private readonly fisioterapiaService: FisioterapiaService) {}

  @Post()
  async create(@Body() createFisioterapiaDto: CreateFisioterapiaDto) {
    return this.fisioterapiaService.create(createFisioterapiaDto);
  }

  @Get()
  findAll() {
    return this.fisioterapiaService.findAll();
  }

  @Get(':id') // :id refers to idfisioterapia
  findOne(@Param('id') id: string) {
    return this.fisioterapiaService.findOne(+id); // Convert ID to number
  }

  @Patch(':id') // Use PATCH for partial updates
  update(@Param('id') id: string, @Body() updateFisioterapiaDto: UpdateFisioterapiaDto) {
    return this.fisioterapiaService.update(+id, updateFisioterapiaDto); // Convert ID to number
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fisioterapiaService.remove(+id); // Convert ID to number
  }
}