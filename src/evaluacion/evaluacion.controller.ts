// src/evaluacion/evaluacion.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Evaluacion } from './entities/evaluacion.entity';

@Controller('evaluacion')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  /**
   * Crea una nueva evaluación.
   * @param createEvaluacionDto Datos para la creación de la evaluación.
   * @returns La evaluación creada.
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion> {
    return this.evaluacionService.create(createEvaluacionDto);
  }

  /**
   * Obtiene todas las evaluaciones.
   * @returns Un array de evaluaciones.
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Evaluacion[]> {
    return this.evaluacionService.findAll();
  }

  /**
   * Obtiene una evaluación por su ID de Nutrición.
   * @param id El ID de Nutrición de la evaluación.
   * @returns La evaluación encontrada.
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Evaluacion> {
    return this.evaluacionService.findOne(id);
  }

  /**
   * Actualiza una evaluación existente por su ID de Nutrición.
   * @param id El ID de Nutrición de la evaluación a actualizar.
   * @param updateEvaluacionDto Datos para la actualización de la evaluación.
   * @returns La evaluación actualizada.
   */
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEvaluacionDto: UpdateEvaluacionDto,
  ): Promise<Evaluacion> {
    return this.evaluacionService.update(id, updateEvaluacionDto);
  }

  /**
   * Elimina una evaluación por su ID de Nutrición.
   * @param id El ID de Nutrición de la evaluación a eliminar.
   * @returns Un objeto con el resultado de la eliminación.
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminaciones exitosas
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.evaluacionService.remove(id);
  }
}
