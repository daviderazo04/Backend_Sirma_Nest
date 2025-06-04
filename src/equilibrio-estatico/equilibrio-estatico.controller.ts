import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquilibrioEstaticoService } from './equilibrio-estatico.service';
import { CreateEquilibrioEstaticoDto } from './dto/create-equilibrio-estatico.dto';
import { UpdateEquilibrioEstaticoDto } from './dto/update-equilibrio-estatico.dto';

@Controller('equilibrio-estatico')
export class EquilibrioEstaticoController {
  constructor(private readonly equilibrioEstaticoService: EquilibrioEstaticoService) {}

  @Post()
  create(@Body() createEquilibrioEstaticoDto: CreateEquilibrioEstaticoDto) {
    return this.equilibrioEstaticoService.create(createEquilibrioEstaticoDto);
  }

  @Get()
  findAll() {
    return this.equilibrioEstaticoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equilibrioEstaticoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquilibrioEstaticoDto: UpdateEquilibrioEstaticoDto) {
    return this.equilibrioEstaticoService.update(+id, updateEquilibrioEstaticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equilibrioEstaticoService.remove(+id);
  }
}
