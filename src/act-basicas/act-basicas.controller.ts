import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActBasicasService } from './act-basicas.service';
import { CreateActBasicaDto } from './dto/create-act-basica.dto';
import { UpdateActBasicaDto } from './dto/update-act-basica.dto';

@Controller('act-basicas')
export class ActBasicasController {
  constructor(private readonly actBasicasService: ActBasicasService) {}

  @Post()
  create(@Body() createActBasicaDto: CreateActBasicaDto) {
    return this.actBasicasService.create(createActBasicaDto);
  }

  @Get()
  findAll() {
    return this.actBasicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actBasicasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActBasicaDto: UpdateActBasicaDto) {
    return this.actBasicasService.update(+id, updateActBasicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actBasicasService.remove(+id);
  }
}
