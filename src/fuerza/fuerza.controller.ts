import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuerzaService } from './fuerza.service';
import { CreateFuerzaDto } from './dto/create-fuerza.dto';
import { UpdateFuerzaDto } from './dto/update-fuerza.dto';

@Controller('fuerza')
export class FuerzaController {
  constructor(private readonly fuerzaService: FuerzaService) {}

  @Post()
  create(@Body() createFuerzaDto: CreateFuerzaDto) {
    return this.fuerzaService.create(createFuerzaDto);
  }

  @Get()
  findAll() {
    return this.fuerzaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fuerzaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuerzaDto: UpdateFuerzaDto) {
    return this.fuerzaService.update(+id, updateFuerzaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fuerzaService.remove(+id);
  }
}
