import { Test, TestingModule } from '@nestjs/testing';
import { TonoMuscularController } from './tono-muscular.controller';
import { TonoMuscularService } from './tono-muscular.service';

describe('TonoMuscularController', () => {
  let controller: TonoMuscularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TonoMuscularController],
      providers: [TonoMuscularService],
    }).compile();

    controller = module.get<TonoMuscularController>(TonoMuscularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
