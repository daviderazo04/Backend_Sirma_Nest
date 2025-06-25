// src/equilibrio-dinamico/equilibrio-dinamico.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquilibrioDinamicoService } from './equilibrio-dinamico.service';
import { EquilibrioDinamicoController } from './equilibrio-dinamico.controller';
import { Equilibriodinamico } from './entities/equilibrio-dinamico.entity'; // Importa la entidad Equilibriodinamico
import { FisioterapiaModule } from '../fisioterapia/fisioterapia.module'; // Importa FisioterapiaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Equilibriodinamico]), // Registra la entidad Equilibriodinamico
    forwardRef(() => FisioterapiaModule), // Importa FisioterapiaModule con forwardRef
  ],
  controllers: [EquilibrioDinamicoController],
  providers: [EquilibrioDinamicoService],
  exports: [EquilibrioDinamicoService], // Exporta el servicio si otros módulos (como Fisioterapia) lo inyectarán
})
export class EquilibrioDinamicoModule {}