// src/andrologico/andrologico.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AndrologicoService } from './andrologico.service';
import { AndrologicoController } from './andrologico.controller'; // Assuming you have this
import { Andrologico } from './entities/andrologico.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Andrologico]), // Register the Andrologico entity with TypeORM
    MedicinaModule, // Import MedicinaModule to make MedicinaService available for injection
  ],
  controllers: [AndrologicoController], // Assuming you have this
  providers: [AndrologicoService],
})
export class AndrologicoModule {}