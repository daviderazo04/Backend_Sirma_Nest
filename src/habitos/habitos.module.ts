// src/habitos/habito.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitoService } from './habitos.service';
import { HabitosController } from './habitos.controller'; // Assuming you have this
import { Habitos } from './entities/habito.entity'; // Correct entity import
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Habitos]), // Make the HabitosRepository available
    MedicinaModule, // Import MedicinaModule so MedicinaService can be injected
  ],
  controllers: [HabitosController], // Assuming you have this
  providers: [HabitoService],
})
export class HabitosModule {}