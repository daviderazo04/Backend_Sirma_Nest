import { Module } from '@nestjs/common';
import { OtrosRiesgosService } from './otros-riesgos.service';
import { OtrosRiesgosController } from './otros-riesgos.controller';

@Module({
  controllers: [OtrosRiesgosController],
  providers: [OtrosRiesgosService],
})
export class OtrosRiesgosModule {}
