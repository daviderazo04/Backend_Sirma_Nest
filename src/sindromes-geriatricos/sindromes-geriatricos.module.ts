// src/sindromes-geriatricos/sindromes-geriatricos.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SindromesGeriatricosService } from './sindromes-geriatricos.service';
import { SindromesGeriatricosController } from './sindromes-geriatricos.controller'; // Assuming you have this
import { Sindromesgeriatricos } from './entities/sindromes-geriatrico.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Sindromesgeriatricos]), // Register the Sindromesgeriatricos entity
    forwardRef(() => MedicinaModule), // Import MedicinaModule for MedicinaService
  ],
  controllers: [SindromesGeriatricosController], // Assuming you have this
  providers: [SindromesGeriatricosService],
  exports: [SindromesGeriatricosService]
})
export class SindromesGeriatricosModule {}