import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AntecedentesFamiliaresService } from './antecedentes-familiares.service';
import { CreateAntecedentesFamiliareDto } from './dto/create-antecedentes-familiare.dto';
import { UpdateAntecedentesFamiliareDto } from './dto/update-antecedentes-familiare.dto';

@Controller('antecedentes-familiares')
export class AntecedentesFamiliaresController {
  constructor(private readonly antecedentesFamiliaresService: AntecedentesFamiliaresService) {}

  @Post()
  create(@Body() createAntecedentesFamiliareDto: CreateAntecedentesFamiliareDto) {
    return this.antecedentesFamiliaresService.create(createAntecedentesFamiliareDto);
  }

  @Get()
  findAll() {
    return this.antecedentesFamiliaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antecedentesFamiliaresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAntecedentesFamiliareDto: UpdateAntecedentesFamiliareDto) {
    return this.antecedentesFamiliaresService.update(+id, updateAntecedentesFamiliareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antecedentesFamiliaresService.remove(+id);
  }
}
