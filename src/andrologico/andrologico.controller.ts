import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AndrologicoService } from './andrologico.service';
import { CreateAndrologicoDto } from './dto/create-andrologico.dto';
import { UpdateAndrologicoDto } from './dto/update-andrologico.dto';

@Controller('andrologico')
export class AndrologicoController {
  constructor(private readonly andrologicoService: AndrologicoService) {}

  @Post()
  create(@Body() createAndrologicoDto: CreateAndrologicoDto) {
    return this.andrologicoService.create(createAndrologicoDto);
  }

  @Get()
  findAll() {
    return this.andrologicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.andrologicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAndrologicoDto: UpdateAndrologicoDto) {
    return this.andrologicoService.update(+id, updateAndrologicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.andrologicoService.remove(+id);
  }
}
