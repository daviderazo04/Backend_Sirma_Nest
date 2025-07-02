// src/antecedentesnutri/antecedentesnutri.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { AntecedentesnutriService } from './antecedentes-nutri.service';
import { CreateAntecedentesnutriDto } from './dto/create-antecedentes-nutri.dto';
import { Antecedentesnutri } from './entities/antecedentes-nutri.entity';


@Controller('antecedentesnutri')
export class AntecedentesnutriController {
  constructor(private readonly antecedentesnutriService: AntecedentesnutriService) {}

  /**
   * Crea un nuevo antecedente nutricional.
   * @param createAntecedentesnutriDto Datos para la creación del antecedente.
   * @returns El antecedente nutricional creado.
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAntecedentesnutriDto: CreateAntecedentesnutriDto): Promise<Antecedentesnutri> {
    return this.antecedentesnutriService.create(createAntecedentesnutriDto);
  }

  /**
   * Obtiene todos los antecedentes nutricionales.
   * @returns Un array de antecedentes nutricionales.
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Antecedentesnutri[]> {
    return this.antecedentesnutriService.findAll();
  }

  /**
   * Obtiene un antecedente nutricional por su ID de Nutrición.
   * @param id El ID de Nutrición del antecedente.
   * @returns El antecedente nutricional encontrado.
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Antecedentesnutri> {
    return this.antecedentesnutriService.findOne(id);
  }

  /**
   * Actualiza un antecedente nutricional existente por su ID de Nutrición.
   * @param id El ID de Nutrición del antecedente a actualizar.
   * @param updateAntecedentesnutriDto Datos para la actualización del antecedente.
   * @returns El antecedente nutricional actualizado.
   */
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAntecedentesnutriDto: CreateAntecedentesnutriDto,
  ): Promise<Antecedentesnutri> {
    return this.antecedentesnutriService.update(id, updateAntecedentesnutriDto);
  }

  /**
   * Elimina un antecedente nutricional por su ID de Nutrición.
   * @param id El ID de Nutrición del antecedente a eliminar.
   * @returns Un objeto con el resultado de la eliminación.
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminaciones exitosas
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.antecedentesnutriService.remove(id);
  }
}
