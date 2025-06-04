import { Module } from '@nestjs/common';
import { DatosAntropometricosService } from './datos-antropometricos.service';
import { DatosAntropometricosController } from './datos-antropometricos.controller';

@Module({
  controllers: [DatosAntropometricosController],
  providers: [DatosAntropometricosService],
})
export class DatosAntropometricosModule {}
