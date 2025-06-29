import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { CognitivoService } from './cognitivo.service';
import { CreateCognitivoDto } from './dto/create-cognitivo.dto';
import { UpdateCognitivoDto } from './dto/update-cognitivo.dto';

@Controller('api/cognitivo')
export class CognitivoController {
  constructor(private readonly cognitivoService: CognitivoService) {}

  @Post()
  create(@Body() createCognitivoDto: CreateCognitivoDto) {
    return this.cognitivoService.create(createCognitivoDto);
  }

  @Get()
  findAll() {
    return this.cognitivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cognitivoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCognitivoDto: UpdateCognitivoDto,
  ) {
    return this.cognitivoService.update(id, updateCognitivoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cognitivoService.remove(id);
  }
}
