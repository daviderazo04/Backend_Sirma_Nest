import { Test, TestingModule } from '@nestjs/testing';
import { PatologicoService } from './patologico.service';

describe('PatologicoService', () => {
  let service: PatologicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatologicoService],
    }).compile();

    service = module.get<PatologicoService>(PatologicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
