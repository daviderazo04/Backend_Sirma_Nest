import { Module } from '@nestjs/common';
import { TamizajeService } from './tamizaje.service';
import { TamizajeController } from './tamizaje.controller';

@Module({
  controllers: [TamizajeController],
  providers: [TamizajeService],
})
export class TamizajeModule {}
