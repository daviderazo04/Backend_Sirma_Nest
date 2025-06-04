import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutricionService } from './nutricion.service';
import { CreateNutricionDto } from './dto/create-nutricion.dto';
import { UpdateNutricionDto } from './dto/update-nutricion.dto';

@Controller('nutricion')
export class NutricionController {
  constructor(private readonly nutricionService: NutricionService) {}

  @Post()
  create(@Body() createNutricionDto: CreateNutricionDto) {
    return this.nutricionService.create(createNutricionDto);
  }

  @Get()
  findAll() {
    return this.nutricionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutricionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutricionDto: UpdateNutricionDto) {
    return this.nutricionService.update(+id, updateNutricionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutricionService.remove(+id);
  }
}
