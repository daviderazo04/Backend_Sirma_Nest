import { Module } from '@nestjs/common';
import { TonoMuscularService } from './tono-muscular.service';
import { TonoMuscularController } from './tono-muscular.controller';

@Module({
  controllers: [TonoMuscularController],
  providers: [TonoMuscularService],
})
export class TonoMuscularModule {}
