// src/equilibrio-estatico/equilibrio-estatico.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquilibrioEstaticoService } from './equilibrio-estatico.service';
import { EquilibrioEstaticoController } from './equilibrio-estatico.controller';
import { Equilibrioestatico } from './entities/equilibrio-estatico.entity'; // Importa la entidad Equilibrioestatico
import { FisioterapiaModule } from '../fisioterapia/fisioterapia.module'; // Importa FisioterapiaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Equilibrioestatico]), // Registra la entidad Equilibrioestatico
    forwardRef(() => FisioterapiaModule), // Importa FisioterapiaModule con forwardRef
  ],
  controllers: [EquilibrioEstaticoController],
  providers: [EquilibrioEstaticoService],
  exports: [EquilibrioEstaticoService], // Exporta el servicio si otros módulos (como Fisioterapia) lo inyectarán
})
export class EquilibrioEstaticoModule {}