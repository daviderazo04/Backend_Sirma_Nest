import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { NutricioncompletoService } from './nutricioncompleto.service';
import { CreateNutricionCompletoDto } from './dto/create-nutricioncompleto.dto';

@Controller('nutricioncompleto')
export class NutricioncompletoController {
  constructor(private readonly service: NutricioncompletoService) {}

  @Post()
  async crear(@Body() dto: CreateNutricionCompletoDto) {
    return await this.service.crear(dto);
  }

  @Get(':idFicha') // Define un endpoint GET con un parámetro de ruta 'idFicha'
  async obtenerPorIdFicha(@Param('idFicha') idFicha: string) {
    // Llama al servicio para obtener los datos de nutrición por el ID de ficha
    return await this.service.obtenerPorIdFicha(idFicha);
  }
}
