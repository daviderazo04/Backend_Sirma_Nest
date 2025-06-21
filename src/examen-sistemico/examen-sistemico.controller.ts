import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ExamenSistemicoService } from './examen-sistemico.service';
import { CreateExamenSistemicoDto } from './dto/create-examen-sistemico.dto';
import { UpdateExamenSistemicoDto } from './dto/update-examen-sistemico.dto';

@Controller('api/examen-sistemico')
export class ExamenSistemicoController {
  constructor(
    private readonly examenSistemicoService: ExamenSistemicoService,
  ) {}

  @Post()
  create(@Body() createExamenSistemicoDto: CreateExamenSistemicoDto) {
    return this.examenSistemicoService.create(createExamenSistemicoDto);
  }

  @Get()
  findAll() {
    return this.examenSistemicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenSistemicoService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamenSistemicoDto: UpdateExamenSistemicoDto,
  ) {
    return this.examenSistemicoService.update(+id, updateExamenSistemicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenSistemicoService.remove(+id);
  }
}
