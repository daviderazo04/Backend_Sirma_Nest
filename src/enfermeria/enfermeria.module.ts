import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enfermeria } from './entities/enfermeria.entity';
import { EnfermeriaService } from './enfermeria.service';
import { EnfermeriaController } from './enfermeria.controller';
import { PacienteModule } from '../paciente/paciente.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enfermeria]), // <-- Importa el repositorio aquí
    PacienteModule, // <-- Importa el módulo de Paciente para usar PacienteService
  ],
  controllers: [EnfermeriaController],
  providers: [EnfermeriaService],
  exports: [EnfermeriaService], // <-- Exporta el servicio para que otros módulos puedan usarlo
})
export class EnfermeriaModule {}
