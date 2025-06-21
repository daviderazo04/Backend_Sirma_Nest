import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FisioterapiaService } from './fisioterapia.service';
import { CreateFisioterapiaDto } from './dto/create-fisioterapia.dto';
import { UpdateFisioterapiaDto } from './dto/update-fisioterapia.dto';

@Controller('fisioterapia')
export class FisioterapiaController {
  constructor(private readonly fisioterapiaService: FisioterapiaService) {}

  @Post()
  create(@Body() createFisioterapiaDto: CreateFisioterapiaDto) {
    return this.fisioterapiaService.create(createFisioterapiaDto);
  }

  @Get()
  findAll() {
    return this.fisioterapiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fisioterapiaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFisioterapiaDto: UpdateFisioterapiaDto,
  ) {
    return this.fisioterapiaService.update(+id, updateFisioterapiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fisioterapiaService.remove(+id);
  }
}
