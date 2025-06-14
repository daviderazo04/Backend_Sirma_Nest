import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MedicinaService } from './medicina.service';
//import { CreateMedicinaDto } from './dto/create-medicina.dto';
import { UpdateMedicinaDto } from './dto/update-medicina.dto';
import { CreateFullMedicinaDto } from './dto/create-full-medicina.dto'; // Import the new DTO


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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicinaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMedicinaDto: UpdateMedicinaDto) {
    return this.medicinaService.update(+id, updateMedicinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicinaService.remove(+id);
  }
}
