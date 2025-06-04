import { Test, TestingModule } from '@nestjs/testing';
import { TonoMuscularService } from './tono-muscular.service';

describe('TonoMuscularService', () => {
  let service: TonoMuscularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TonoMuscularService],
    }).compile();

    service = module.get<TonoMuscularService>(TonoMuscularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
