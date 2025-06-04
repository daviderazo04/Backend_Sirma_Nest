import { Module } from '@nestjs/common';
import { PatologicoService } from './patologico.service';
import { PatologicoController } from './patologico.controller';

@Module({
  controllers: [PatologicoController],
  providers: [PatologicoService],
})
export class PatologicoModule {}
