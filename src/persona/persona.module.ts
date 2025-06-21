// src/persona/persona.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { PersonaFicha } from 'src/persona-ficha/entities/persona-ficha.entity';
import { Datosgenerales } from 'src/datos-generales/entities/datos-generale.entity';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona, PersonaFicha, Datosgenerales]),
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
  exports: [PersonaService],
})
export class PersonaModule {}
