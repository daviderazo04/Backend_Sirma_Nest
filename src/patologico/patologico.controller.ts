import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PatologicoService } from './patologico.service';
import { CreatePatologicoDto } from './dto/create-patologico.dto';
import { UpdatePatologicoDto } from './dto/update-patologico.dto';

@Controller('api/patologico')
export class PatologicoController {
  constructor(private readonly patologicoService: PatologicoService) {}

  @Post()
  create(@Body() createPatologicoDto: CreatePatologicoDto) {
    return this.patologicoService.create(createPatologicoDto);
  }

  @Get()
  findAll() {
    return this.patologicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patologicoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePatologicoDto: UpdatePatologicoDto) {
    return this.patologicoService.update(+id, updatePatologicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patologicoService.remove(+id);
  }
}
