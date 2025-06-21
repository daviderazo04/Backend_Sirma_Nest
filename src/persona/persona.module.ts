// src/persona/persona.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { Persona } from './entities/persona.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona]), // ESTA LÍNEA ES CRÍTICA Y DEBE ESTAR AHÍ
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
  exports: [PersonaService], // Exporta el servicio si necesitas usarlo en otros módulos
})
export class PersonaModule {}
