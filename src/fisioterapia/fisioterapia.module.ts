import { Module } from '@nestjs/common';
import { FisioterapiaService } from './fisioterapia.service';
import { FisioterapiaController } from './fisioterapia.controller';

@Module({
  controllers: [FisioterapiaController],
  providers: [FisioterapiaService],
})
export class FisioterapiaModule {}
