/*import { Module } from '@nestjs/common';
import { MedicinaService } from './medicina.service';
import { MedicinaController } from './medicina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicina } from './entities/medicina.entity'; // Asegúrate de importar la entidad Medicina
import { PacienteModule } from '../paciente/paciente.module';  // Importar el PacienteModule


@Module({
  imports: [
    TypeOrmModule.forFeature([Medicina]), // Importar TypeOrmModule y registrar Medicina aquí
    PacienteModule,
  ],
  controllers: [MedicinaController],
  providers: [MedicinaService],
  exports: [MedicinaService], // <--- YOU MUST ADD THIS LINE!
})
export class MedicinaModule {}
*/

// src/medicina/medicina.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { MedicinaService } from './medicina.service';
import { MedicinaController } from './medicina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicina } from './entities/medicina.entity';
import { PacienteModule } from '../paciente/paciente.module';

// Import all other modules for nested services
import { AlertaModule } from '../alerta/alerta.module';
import { AndrologicoModule } from '../andrologico/andrologico.module';
import { AntecedentesFamiliaresModule } from '../antecedentes-familiares/antecedentes-familiares.module';
import { DiagnosticoModule } from '../diagnostico/diagnostico.module';
import { ExamenRegionalModule } from '../examen-regional/examen-regional.module';
import { ExamenSistemicoModule } from '../examen-sistemico/examen-sistemico.module';
import { FarmacologicoModule } from '../farmacologico/farmacologico.module';
import { GeneralModule } from '../general/general.module';
import { GinecologicoModule } from '../ginecologico/ginecologico.module';
import { HabitosModule } from '../habitos/habitos.module';
import { PatologicoModule } from '../patologico/patologico.module';
import { RevisionActualModule } from '../revision-actual/revision-actual.module';
import { SindromesGeriatricosModule } from '../sindromes-geriatricos/sindromes-geriatricos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Medicina]),
    PacienteModule,
    // Add all other modules here so their services can be injected into MedicinaService
    forwardRef(() => AlertaModule),
    forwardRef(() => AndrologicoModule),
    forwardRef(() => AntecedentesFamiliaresModule),
    forwardRef(() => DiagnosticoModule),
    forwardRef(() => ExamenRegionalModule),
    forwardRef(() => ExamenSistemicoModule),
    forwardRef(() => FarmacologicoModule),
    forwardRef(() => GeneralModule),
    forwardRef(() => GinecologicoModule),
    forwardRef(() => HabitosModule),
    forwardRef(() => PatologicoModule),
    forwardRef(() => RevisionActualModule),
    forwardRef(() => SindromesGeriatricosModule),
  ],
  controllers: [MedicinaController],
  providers: [MedicinaService],
  exports: [MedicinaService], // Ensure MedicinaService is exported if other modules use it
})
export class MedicinaModule {}
