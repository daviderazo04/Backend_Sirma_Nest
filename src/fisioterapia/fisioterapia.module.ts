// src/fisioterapia/fisioterapia.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FisioterapiaService } from './fisioterapia.service';
import { FisioterapiaController } from './fisioterapia.controller';
import { Fisioterapia } from './entities/fisioterapia.entity';
import { PacienteModule } from '../paciente/paciente.module'; // Import PacienteModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Fisioterapia]), // Register the Fisioterapia entity
    PacienteModule, // Import PacienteModule to make PacienteService available
  ],
  controllers: [FisioterapiaController],
  providers: [FisioterapiaService],
  exports: [FisioterapiaService], // Export FisioterapiaService if other modules will inject it
})
export class FisioterapiaModule {}