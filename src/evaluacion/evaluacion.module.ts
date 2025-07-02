// src/evaluacion/evaluacion.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { Evaluacion } from './entities/evaluacion.entity';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity'; // Importa la entidad Nutricion

@Module({
  imports: [
    TypeOrmModule.forFeature([Evaluacion, Nutricion]), // Importa ambas entidades aquí
  ],
  controllers: [EvaluacionController],
  providers: [EvaluacionService],
  exports: [EvaluacionService], // Exporta el servicio si lo necesitas en otros módulos
})
export class EvaluacionModule {}
