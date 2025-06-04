import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguimientoFisioterapiaService } from './seguimiento-fisioterapia.service';
import { CreateSeguimientoFisioterapiaDto } from './dto/create-seguimiento-fisioterapia.dto';
import { UpdateSeguimientoFisioterapiaDto } from './dto/update-seguimiento-fisioterapia.dto';

@Controller('seguimiento-fisioterapia')
export class SeguimientoFisioterapiaController {
  constructor(private readonly seguimientoFisioterapiaService: SeguimientoFisioterapiaService) {}

  @Post()
  create(@Body() createSeguimientoFisioterapiaDto: CreateSeguimientoFisioterapiaDto) {
    return this.seguimientoFisioterapiaService.create(createSeguimientoFisioterapiaDto);
  }

  @Get()
  findAll() {
    return this.seguimientoFisioterapiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguimientoFisioterapiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguimientoFisioterapiaDto: UpdateSeguimientoFisioterapiaDto) {
    return this.seguimientoFisioterapiaService.update(+id, updateSeguimientoFisioterapiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguimientoFisioterapiaService.remove(+id);
  }
}
