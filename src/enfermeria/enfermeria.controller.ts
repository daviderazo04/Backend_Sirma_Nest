import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnfermeriaService } from './enfermeria.service';
import { CreateEnfermeriaDto } from './dto/create-enfermeria.dto';
import { UpdateEnfermeriaDto } from './dto/update-enfermeria.dto';

@Controller('/api/enfermeria') // Ruta base para los endpoints de enfermería
export class EnfermeriaController {
  constructor(private readonly enfermeriaService: EnfermeriaService) {}

  @Post()
  async create(@Body() createEnfermeriaDto: CreateEnfermeriaDto) {
    return this.enfermeriaService.create(createEnfermeriaDto);
  }

  @Get()
  findAll() {
    return this.enfermeriaService.findAll();
  }

  @Get(':id') // :id se refiere a idenfermeria
  findOne(@Param('id') id: string) {
    return this.enfermeriaService.findOne(+id); // Convertir a número
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnfermeriaDto: UpdateEnfermeriaDto) {
    return this.enfermeriaService.update(+id, updateEnfermeriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermeriaService.remove(+id);
  }
}
