import { Test, TestingModule } from '@nestjs/testing';
import { NutricionService } from './nutricion.service';

describe('NutricionService', () => {
  let service: NutricionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutricionService],
    }).compile();

    service = module.get<NutricionService>(NutricionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
