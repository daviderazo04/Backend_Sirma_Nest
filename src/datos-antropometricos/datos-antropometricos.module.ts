// src/datosantropometricos/datosantropometricos.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Nutricion } from 'src/nutricion/entities/nutricion.entity'; // Importa la entidad Nutricion
import { Datosantropometricos } from './entities/datos-antropometrico.entity';
import { DatosantropometricosController } from './datos-antropometricos.controller';
import { DatosantropometricosService } from './datos-antropometricos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Datosantropometricos, Nutricion]), // Importa ambas entidades aquí
  ],
  controllers: [DatosantropometricosController],
  providers: [DatosantropometricosService],
  exports: [DatosantropometricosService], // Exporta el servicio si lo necesitas en otros módulos
})
export class DatosantropometricosModule {}
