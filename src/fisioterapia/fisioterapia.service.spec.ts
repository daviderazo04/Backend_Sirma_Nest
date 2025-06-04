import { Test, TestingModule } from '@nestjs/testing';
import { FisioterapiaService } from './fisioterapia.service';

describe('FisioterapiaService', () => {
  let service: FisioterapiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FisioterapiaService],
    }).compile();

    service = module.get<FisioterapiaService>(FisioterapiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
