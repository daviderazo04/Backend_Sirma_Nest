import { Test, TestingModule } from '@nestjs/testing';
import { ExamenRegionalService } from './examen-regional.service';

describe('ExamenRegionalService', () => {
  let service: ExamenRegionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamenRegionalService],
    }).compile();

    service = module.get<ExamenRegionalService>(ExamenRegionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
