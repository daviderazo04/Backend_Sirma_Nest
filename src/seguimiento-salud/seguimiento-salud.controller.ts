import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeguimientoSaludService } from './seguimiento-salud.service';
import { CreateSeguimientoSaludDto } from './dto/create-seguimiento-salud.dto';
import { UpdateSeguimientoSaludDto } from './dto/update-seguimiento-salud.dto';

@Controller('seguimiento-salud')
export class SeguimientoSaludController {
  constructor(
    private readonly seguimientoSaludService: SeguimientoSaludService,
  ) {}

  @Post()
  create(@Body() createSeguimientoSaludDto: CreateSeguimientoSaludDto) {
    return this.seguimientoSaludService.create(createSeguimientoSaludDto);
  }

  @Get()
  findAll() {
    return this.seguimientoSaludService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguimientoSaludService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeguimientoSaludDto: UpdateSeguimientoSaludDto,
  ) {
    return this.seguimientoSaludService.update(+id, updateSeguimientoSaludDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguimientoSaludService.remove(+id);
  }
}
