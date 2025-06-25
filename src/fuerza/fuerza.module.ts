// src/fuerza/fuerza.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuerzaService } from './fuerza.service';
import { FuerzaController } from './fuerza.controller';
import { Fuerza } from './entities/fuerza.entity'; // Importa la entidad Fuerza
import { FisioterapiaModule } from '../fisioterapia/fisioterapia.module'; // Importa FisioterapiaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Fuerza]), // Registra la entidad Fuerza
    forwardRef(() => FisioterapiaModule), // Importa FisioterapiaModule con forwardRef
  ],
  controllers: [FuerzaController],
  providers: [FuerzaService],
  exports: [FuerzaService], // Exporta el servicio si otros módulos (como Fisioterapia) lo inyectarán
})
export class FuerzaModule {}