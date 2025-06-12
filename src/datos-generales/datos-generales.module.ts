import { Module } from '@nestjs/common';
import { DatosGeneralesService } from './datos-generales.service';
import { DatosGeneralesController } from './datos-generales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Datosgenerales } from './entities/datos-generale.entity';
@Module({
  
  imports: [TypeOrmModule.forFeature([Datosgenerales])],
  controllers: [DatosGeneralesController],
  providers: [DatosGeneralesService],
})
export class DatosGeneralesModule {}
