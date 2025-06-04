import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SindromesGeriatricosService } from './sindromes-geriatricos.service';
import { CreateSindromesGeriatricoDto } from './dto/create-sindromes-geriatrico.dto';
import { UpdateSindromesGeriatricoDto } from './dto/update-sindromes-geriatrico.dto';

@Controller('sindromes-geriatricos')
export class SindromesGeriatricosController {
  constructor(private readonly sindromesGeriatricosService: SindromesGeriatricosService) {}

  @Post()
  create(@Body() createSindromesGeriatricoDto: CreateSindromesGeriatricoDto) {
    return this.sindromesGeriatricosService.create(createSindromesGeriatricoDto);
  }

  @Get()
  findAll() {
    return this.sindromesGeriatricosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sindromesGeriatricosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSindromesGeriatricoDto: UpdateSindromesGeriatricoDto) {
    return this.sindromesGeriatricosService.update(+id, updateSindromesGeriatricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sindromesGeriatricosService.remove(+id);
  }
}
