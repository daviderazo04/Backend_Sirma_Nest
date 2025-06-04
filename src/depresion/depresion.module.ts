import { Module } from '@nestjs/common';
import { DepresionService } from './depresion.service';
import { DepresionController } from './depresion.controller';

@Module({
  controllers: [DepresionController],
  providers: [DepresionService],
})
export class DepresionModule {}
