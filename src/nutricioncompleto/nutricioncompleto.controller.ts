import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
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
  /**
   * Handles GET requests to retrieve nutrition data by nutrition header ID.
   * @param idNutricion The ID of the nutrition header.
   * @returns The nutrition data.
   */
  @Get('header/:idNutricion') // ¡NUEVO PATH! Endpoint para obtener por IDNUTRICION (ej: /nutricioncompleto/header/10)
  async obtenerPorIdNutricion(@Param('idNutricion') idNutricion: number) {
    return await this.service.obtenerPorIdNutricion(idNutricion);
  }

  /**
   * Handles PUT requests to update a nutrition record by its header ID.
   * @param idNutricion The ID of the nutrition header to update.
   * @param dto The data transfer object with updated nutrition details.
   * @returns A success message.
   */
  @Put(':idNutricion') // Endpoint para actualizar por IDNUTRICION
  async actualizar(
    @Param('idNutricion') idNutricion: number,
    @Body() dto: CreateNutricionCompletoDto,
  ) {
    return await this.service.actualizar(idNutricion, dto);
  }
}
