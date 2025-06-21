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
import { ExamenRegionalService } from './examen-regional.service';
import { CreateExamenRegionalDto } from './dto/create-examen-regional.dto';
import { UpdateExamenRegionalDto } from './dto/update-examen-regional.dto';

@Controller('api/examen-regional')
export class ExamenRegionalController {
  constructor(private readonly examenRegionalService: ExamenRegionalService) {}

  @Post()
  create(@Body() createExamenRegionalDto: CreateExamenRegionalDto) {
    return this.examenRegionalService.create(createExamenRegionalDto);
  }

  @Get()
  findAll() {
    return this.examenRegionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenRegionalService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamenRegionalDto: UpdateExamenRegionalDto,
  ) {
    return this.examenRegionalService.update(+id, updateExamenRegionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenRegionalService.remove(+id);
  }
}
