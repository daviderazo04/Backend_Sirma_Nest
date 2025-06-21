// src/examen-regional/examen-regional.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Make sure this is imported
import { ExamenRegionalService } from './examen-regional.service';
import { ExamenRegionalController } from './examen-regional.controller'; // Assuming you have this
import { Examenregional } from './entities/examen-regional.entity'; // Make sure your entity is imported
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Examenregional]), // Register the Examenregional entity
    forwardRef(() => MedicinaModule), // Import MedicinaModule for MedicinaService
  ],
  controllers: [ExamenRegionalController], // Assuming you have this
  providers: [ExamenRegionalService],
  exports: [ExamenRegionalService],
})
export class ExamenRegionalModule {}
