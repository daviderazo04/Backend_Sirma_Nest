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
import { OtrosRiesgosService } from './otros-riesgos.service';
import { CreateOtrosRiesgoDto } from './dto/create-otros-riesgo.dto';
import { UpdateOtrosRiesgoDto } from './dto/update-otros-riesgo.dto';

@Controller('api/otros-riesgos')
export class OtrosRiesgosController {
  constructor(private readonly otrosRiesgosService: OtrosRiesgosService) {}

  @Post()
  create(@Body() createOtrosRiesgoDto: CreateOtrosRiesgoDto) {
    return this.otrosRiesgosService.create(createOtrosRiesgoDto);
  }

  @Get()
  findAll() {
    return this.otrosRiesgosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.otrosRiesgosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOtrosRiesgoDto: UpdateOtrosRiesgoDto,
  ) {
    return this.otrosRiesgosService.update(id, updateOtrosRiesgoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.otrosRiesgosService.remove(id);
  }
}
