import { Module } from '@nestjs/common';
import { ActInstrumentalService } from './act-instrumental.service';
import { ActInstrumentalController } from './act-instrumental.controller';

@Module({
  controllers: [ActInstrumentalController],
  providers: [ActInstrumentalService],
})
export class ActInstrumentalModule {}
