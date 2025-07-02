// src/datosantropometricos/datosantropometricos.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { DatosantropometricosService } from './datos-antropometricos.service';
import { CreateDatosantropometricosDto } from './dto/create-datos-antropometrico.dto';
import { Datosantropometricos } from './entities/datos-antropometrico.entity';


@Controller('datosantropometricos')
export class DatosantropometricosController {
  constructor(private readonly datosantropometricosService: DatosantropometricosService) {}

  /**
   * Crea nuevos datos antropométricos.
   * @param createDatosantropometricosDto Datos para la creación.
   * @returns Los datos antropométricos creados.
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDatosantropometricosDto: CreateDatosantropometricosDto): Promise<Datosantropometricos> {
    return this.datosantropometricosService.create(createDatosantropometricosDto);
  }

  /**
   * Obtiene todos los datos antropométricos.
   * @returns Un array de datos antropométricos.
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Datosantropometricos[]> {
    return this.datosantropometricosService.findAll();
  }

  /**
   * Obtiene datos antropométricos por su ID de Nutrición.
   * @param id El ID de Nutrición de los datos.
   * @returns Los datos antropométricos encontrados.
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Datosantropometricos> {
    return this.datosantropometricosService.findOne(id);
  }

  /**
   * Actualiza datos antropométricos existentes por su ID de Nutrición.
   * @param id El ID de Nutrición de los datos a actualizar.
   * @param updateDatosantropometricosDto Datos para la actualización.
   * @returns Los datos antropométricos actualizados.
   */
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDatosantropometricosDto: CreateDatosantropometricosDto,
  ): Promise<Datosantropometricos> {
    return this.datosantropometricosService.update(id, updateDatosantropometricosDto);
  }

  /**
   * Elimina datos antropométricos por su ID de Nutrición.
   * @param id El ID de Nutrición de los datos a eliminar.
   * @returns Un objeto con el resultado de la eliminación.
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminaciones exitosas
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.datosantropometricosService.remove(id);
  }
}
