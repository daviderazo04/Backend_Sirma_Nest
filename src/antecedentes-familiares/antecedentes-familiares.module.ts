// src/antecedentes-familiares/antecedentes-familiares.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <--- ADD THIS IMPORT
import { AntecedentesfamiliaresService } from './antecedentes-familiares.service';
import { AntecedentesFamiliaresController } from './antecedentes-familiares.controller';
import { Antecedentesfamiliares } from './entities/antecedentes-familiare.entity'; // <--- ADD THIS IMPORT (Your entity)
import { MedicinaModule } from '../medicina/medicina.module'; // <--- ADD THIS IMPORT (For MedicinaService)

@Module({
  imports: [ // <--- ADD THE 'imports' ARRAY
    TypeOrmModule.forFeature([Antecedentesfamiliares]), // <--- ADD THIS LINE
    MedicinaModule, // <--- ADD THIS LINE
  ],
  controllers: [AntecedentesFamiliaresController],
  providers: [AntecedentesfamiliaresService],
})
export class AntecedentesFamiliaresModule {}