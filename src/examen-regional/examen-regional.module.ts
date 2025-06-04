import { Module } from '@nestjs/common';
import { ExamenRegionalService } from './examen-regional.service';
import { ExamenRegionalController } from './examen-regional.controller';

@Module({
  controllers: [ExamenRegionalController],
  providers: [ExamenRegionalService],
})
export class ExamenRegionalModule {}
