import { Module } from '@nestjs/common';
import { EquilibrioDinamicoService } from './equilibrio-dinamico.service';
import { EquilibrioDinamicoController } from './equilibrio-dinamico.controller';

@Module({
  controllers: [EquilibrioDinamicoController],
  providers: [EquilibrioDinamicoService],
})
export class EquilibrioDinamicoModule {}
