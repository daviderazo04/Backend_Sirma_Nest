import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('resumen-nutricional')
export class ResumenNutricionalController {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getResumen() {
    const [result] = await this.dataSource.query('CALL sp_resumen_nutricional()');
    return result[0]; // Devuelve el primer objeto del resultado
  }
}
