import { Module, forwardRef } from '@nestjs/common'; // <--- Import forwardRef
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlertaService } from './alerta.service';
import { AlertaController } from './alerta.controller';
import { Alerta } from './entities/alerta.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Alerta]), // Make the AlertaRepository available
    forwardRef(() => MedicinaModule), // Import MedicinaModule so MedicinaService can be injected
  ],
  controllers: [AlertaController],
  providers: [AlertaService],
  exports: [AlertaService], // <--- Crucial: If other modules need to inject AlertaService
})
export class AlertaModule {}
