// src/paciente/paciente.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- Importa TypeOrmModule
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';// <-- ¡IMPORTA TU ENTIDAD REAL AQUÍ!
import { Paciente } from './entities/paciente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paciente]), // ESTA LÍNEA ES CRÍTICA Y DEBE ESTAR AHÍ
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService], // EXPORTAR EL PACIENTE SERVICE
})
export class PacienteModule {}