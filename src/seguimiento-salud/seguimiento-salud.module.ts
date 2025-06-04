import { Module } from '@nestjs/common';
import { SeguimientoSaludService } from './seguimiento-salud.service';
import { SeguimientoSaludController } from './seguimiento-salud.controller';

@Module({
  controllers: [SeguimientoSaludController],
  providers: [SeguimientoSaludService],
})
export class SeguimientoSaludModule {}
