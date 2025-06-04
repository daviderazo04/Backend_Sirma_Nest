import { Module } from '@nestjs/common';
import { RevisionActualService } from './revision-actual.service';
import { RevisionActualController } from './revision-actual.controller';

@Module({
  controllers: [RevisionActualController],
  providers: [RevisionActualService],
})
export class RevisionActualModule {}
