import { Module } from '@nestjs/common';
import { CognitivoService } from './cognitivo.service';
import { CognitivoController } from './cognitivo.controller';

@Module({
  controllers: [CognitivoController],
  providers: [CognitivoService],
})
export class CognitivoModule {}
