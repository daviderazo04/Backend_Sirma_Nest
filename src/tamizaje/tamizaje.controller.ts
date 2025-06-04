import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TamizajeService } from './tamizaje.service';
import { CreateTamizajeDto } from './dto/create-tamizaje.dto';
import { UpdateTamizajeDto } from './dto/update-tamizaje.dto';

@Controller('tamizaje')
export class TamizajeController {
  constructor(private readonly tamizajeService: TamizajeService) {}

  @Post()
  create(@Body() createTamizajeDto: CreateTamizajeDto) {
    return this.tamizajeService.create(createTamizajeDto);
  }

  @Get()
  findAll() {
    return this.tamizajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tamizajeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTamizajeDto: UpdateTamizajeDto) {
    return this.tamizajeService.update(+id, updateTamizajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tamizajeService.remove(+id);
  }
}
