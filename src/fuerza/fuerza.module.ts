import { Module } from '@nestjs/common';
import { FuerzaService } from './fuerza.service';
import { FuerzaController } from './fuerza.controller';

@Module({
  controllers: [FuerzaController],
  providers: [FuerzaService],
})
export class FuerzaModule {}
