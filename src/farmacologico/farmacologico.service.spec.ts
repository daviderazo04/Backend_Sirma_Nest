import { Test, TestingModule } from '@nestjs/testing';
import { FarmacologicoService } from './farmacologico.service';

describe('FarmacologicoService', () => {
  let service: FarmacologicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmacologicoService],
    }).compile();

    service = module.get<FarmacologicoService>(FarmacologicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
