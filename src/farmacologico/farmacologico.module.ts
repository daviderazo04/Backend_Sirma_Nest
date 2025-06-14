// src/farmacologico/farmacologico.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmacologicoService } from './farmacologico.service';
import { FarmacologicoController } from './farmacologico.controller'; // Assuming you have this
import { Farmacologico } from './entities/farmacologico.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Farmacologico]), // Register the Farmacologico entity with TypeORM
    forwardRef(() => MedicinaModule), // Import MedicinaModule to make MedicinaService available for injection
  ],
  controllers: [FarmacologicoController], // Assuming you have this
  providers: [FarmacologicoService],
  exports: [FarmacologicoService]
})
export class FarmacologicoModule {}