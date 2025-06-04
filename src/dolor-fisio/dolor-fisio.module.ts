import { Module } from '@nestjs/common';
import { DolorFisioService } from './dolor-fisio.service';
import { DolorFisioController } from './dolor-fisio.controller';

@Module({
  controllers: [DolorFisioController],
  providers: [DolorFisioService],
})
export class DolorFisioModule {}
