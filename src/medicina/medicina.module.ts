import { Module } from '@nestjs/common';
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
})
export class MedicinaModule {}
