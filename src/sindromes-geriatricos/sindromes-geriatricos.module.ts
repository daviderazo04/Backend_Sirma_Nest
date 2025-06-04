import { Module } from '@nestjs/common';
import { SindromesGeriatricosService } from './sindromes-geriatricos.service';
import { SindromesGeriatricosController } from './sindromes-geriatricos.controller';

@Module({
  controllers: [SindromesGeriatricosController],
  providers: [SindromesGeriatricosService],
})
export class SindromesGeriatricosModule {}
