import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MedicinaService } from './medicina.service';
//import { CreateMedicinaDto } from './dto/create-medicina.dto';
import { UpdateMedicinaDto } from './dto/update-medicina.dto';
import { CreateFullMedicinaDto } from './dto/create-full-medicina.dto'; // Import the new DTO
import { UpdateFullMedicinaDto } from './dto/update-full-medicina.dto';


@Controller('/api/medicina')
export class MedicinaController {
  constructor(private readonly medicinaService: MedicinaService) {}

  /*@Post()
  create(@Body() createMedicinaDto: CreateMedicinaDto) {
    return this.medicinaService.create(createMedicinaDto);
  }*/

  @Post()
  // Use the new CreateFullMedicinaDto
  async create(@Body() createFullMedicinaDto: CreateFullMedicinaDto) {
    return this.medicinaService.createFull(createFullMedicinaDto); // Call a new service method
  }

  @Get()
  findAll() {
    return this.medicinaService.findAll();
  }

  // En src/medicina/medicina.controller.ts
  @Get('/full') // Un nuevo endpoint para evitar conflictos con el Get() existente
  findAllFull() {
    return this.medicinaService.findAllFull();
  }

  @Get(':id')
  // MODIFICACIÓN AQUÍ: Ahora llama a findOneFull para cargar todas las relaciones
  async findOne(@Param('id') id: string) {
    return this.medicinaService.findOneFull(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMedicinaDto: UpdateMedicinaDto) {
    return this.medicinaService.update(+id, updateMedicinaDto);
  }

  @Patch(':id') // Este es el endpoint para "update de todos"
  async patch(@Param('id') id: string, @Body() updateFullMedicinaDto: UpdateFullMedicinaDto) {
    // Aquí es donde se llama al servicio para realizar el "update conjunto"
    return this.medicinaService.updateFull(+id, updateFullMedicinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicinaService.remove(+id);
  }
}
