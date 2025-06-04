import { Module } from '@nestjs/common';
import { SeguimientoFisioterapiaService } from './seguimiento-fisioterapia.service';
import { SeguimientoFisioterapiaController } from './seguimiento-fisioterapia.controller';

@Module({
  controllers: [SeguimientoFisioterapiaController],
  providers: [SeguimientoFisioterapiaService],
})
export class SeguimientoFisioterapiaModule {}
