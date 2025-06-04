import { Module } from '@nestjs/common';
import { DatosGeneralesService } from './datos-generales.service';
import { DatosGeneralesController } from './datos-generales.controller';

@Module({
  controllers: [DatosGeneralesController],
  providers: [DatosGeneralesService],
})
export class DatosGeneralesModule {}
