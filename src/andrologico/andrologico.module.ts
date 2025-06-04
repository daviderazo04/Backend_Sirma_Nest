import { Module } from '@nestjs/common';
import { AndrologicoService } from './andrologico.service';
import { AndrologicoController } from './andrologico.controller';

@Module({
  controllers: [AndrologicoController],
  providers: [AndrologicoService],
})
export class AndrologicoModule {}
