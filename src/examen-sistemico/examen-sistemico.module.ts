// src/examen-sistemico/examen-sistemico.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Make sure this is imported
import { ExamenSistemicoService } from './examen-sistemico.service';
import { ExamenSistemicoController } from './examen-sistemico.controller'; // Assuming you have this
import { Examensistemico } from './entities/examen-sistemico.entity'; // Make sure your entity is imported
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Examensistemico]), // Register the Examensistemico entity
    MedicinaModule, // Import MedicinaModule for MedicinaService
  ],
  controllers: [ExamenSistemicoController], // Assuming you have this
  providers: [ExamenSistemicoService],
})
export class ExamenSistemicoModule {}