import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CribajeService } from './cribaje.service';
import { CreateCribajeDto } from './dto/create-cribaje.dto';
import { UpdateCribajeDto } from './dto/update-cribaje.dto';

@Controller('cribaje')
export class CribajeController {
  constructor(private readonly cribajeService: CribajeService) {}

  @Post()
  create(@Body() createCribajeDto: CreateCribajeDto) {
    return this.cribajeService.create(createCribajeDto);
  }

  @Get()
  findAll() {
    return this.cribajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cribajeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCribajeDto: UpdateCribajeDto) {
    return this.cribajeService.update(+id, updateCribajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cribajeService.remove(+id);
  }
}
