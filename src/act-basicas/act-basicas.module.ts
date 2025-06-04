import { Module } from '@nestjs/common';
import { ActBasicasService } from './act-basicas.service';
import { ActBasicasController } from './act-basicas.controller';

@Module({
  controllers: [ActBasicasController],
  providers: [ActBasicasService],
})
export class ActBasicasModule {}
