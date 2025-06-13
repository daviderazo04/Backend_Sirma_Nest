import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlertaService } from './alerta.service';
import { AlertaController } from './alerta.controller';
import { Alerta } from './entities/alerta.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule


@Module({
  imports: [
    TypeOrmModule.forFeature([Alerta]), // Make the AlertaRepository available
    MedicinaModule, // Import MedicinaModule so MedicinaService can be injected
  ],
  controllers: [AlertaController],
  providers: [AlertaService],
})
export class AlertaModule {}
