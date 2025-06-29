import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DatosGeneralesService } from './datos-generales.service';
import { CreateDatosGeneraleDto } from './dto/create-datos-generale.dto';
import { UpdateDatosGeneraleDto } from './dto/update-datos-generale.dto';

@Controller('api/datos-generales')
export class DatosGeneralesController {
  constructor(private readonly datosGeneralesService: DatosGeneralesService) {}

  @Post()
  async create(@Body() createDatosGeneraleDto: CreateDatosGeneraleDto) {
    return await this.datosGeneralesService.create(createDatosGeneraleDto);
  }

  @Get()
  async findAll() {
    return await this.datosGeneralesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.datosGeneralesService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDatosGeneraleDto: UpdateDatosGeneraleDto,
  ) {
    return await this.datosGeneralesService.update(+id, updateDatosGeneraleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.datosGeneralesService.remove(+id);
  }
}
