// src/patologico/patologico.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatologicoService } from './patologico.service';
import { PatologicoController } from './patologico.controller'; // Assuming you have this
import { Patologico } from './entities/patologico.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Patologico]), // Make the PatologicoRepository available
    MedicinaModule, // Import MedicinaModule so MedicinaService can be injected
  ],
  controllers: [PatologicoController], // Assuming you have this
  providers: [PatologicoService],
})
export class PatologicoModule {}