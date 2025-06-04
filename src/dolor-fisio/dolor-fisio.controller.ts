import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DolorFisioService } from './dolor-fisio.service';
import { CreateDolorFisioDto } from './dto/create-dolor-fisio.dto';
import { UpdateDolorFisioDto } from './dto/update-dolor-fisio.dto';

@Controller('dolor-fisio')
export class DolorFisioController {
  constructor(private readonly dolorFisioService: DolorFisioService) {}

  @Post()
  create(@Body() createDolorFisioDto: CreateDolorFisioDto) {
    return this.dolorFisioService.create(createDolorFisioDto);
  }

  @Get()
  findAll() {
    return this.dolorFisioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dolorFisioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDolorFisioDto: UpdateDolorFisioDto) {
    return this.dolorFisioService.update(+id, updateDolorFisioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dolorFisioService.remove(+id);
  }
}
