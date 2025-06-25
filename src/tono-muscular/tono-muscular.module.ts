// src/tono-muscular/tono-muscular.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TonoMuscularService } from './tono-muscular.service';
import { TonoMuscularController } from './tono-muscular.controller';
import { Tonomuscular } from './entities/tono-muscular.entity'; // Importa la entidad Tonomuscular
import { FisioterapiaModule } from '../fisioterapia/fisioterapia.module'; // Importa FisioterapiaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Tonomuscular]), // Registra la entidad Tonomuscular
    forwardRef(() => FisioterapiaModule), // Importa FisioterapiaModule y usa forwardRef para evitar ciclos
  ],
  controllers: [TonoMuscularController],
  providers: [TonoMuscularService],
  exports: [TonoMuscularService], // Exporta el servicio si otros módulos necesitarán inyectarlo
})
export class TonoMuscularModule {}