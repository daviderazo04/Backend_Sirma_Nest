// src/diagnostico/diagnostico.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Make sure this is imported
import { DiagnosticoService } from './diagnostico.service';
import { DiagnosticoController } from './diagnostico.controller'; // Assuming you have this
import { Diagnostico } from './entities/diagnostico.entity'; // Make sure your entity is imported
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Diagnostico]), // Register the Diagnostico entity with TypeORM
    forwardRef(() => MedicinaModule), // Import MedicinaModule to make MedicinaService available
  ],
  controllers: [DiagnosticoController], // Assuming you have this
  providers: [DiagnosticoService],
  exports: [DiagnosticoService],
})
export class DiagnosticoModule {}
