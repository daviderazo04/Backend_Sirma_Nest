import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GinecologicoService } from './ginecologico.service';
import { CreateGinecologicoDto } from './dto/create-ginecologico.dto';
import { UpdateGinecologicoDto } from './dto/update-ginecologico.dto';

@Controller('ginecologico')
export class GinecologicoController {
  constructor(private readonly ginecologicoService: GinecologicoService) {}

  @Post()
  create(@Body() createGinecologicoDto: CreateGinecologicoDto) {
    return this.ginecologicoService.create(createGinecologicoDto);
  }

  @Get()
  findAll() {
    return this.ginecologicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ginecologicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGinecologicoDto: UpdateGinecologicoDto) {
    return this.ginecologicoService.update(+id, updateGinecologicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ginecologicoService.remove(+id);
  }
}
