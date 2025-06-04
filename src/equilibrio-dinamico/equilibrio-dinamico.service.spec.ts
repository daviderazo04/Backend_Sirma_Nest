import { Test, TestingModule } from '@nestjs/testing';
import { EquilibrioDinamicoService } from './equilibrio-dinamico.service';

describe('EquilibrioDinamicoService', () => {
  let service: EquilibrioDinamicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquilibrioDinamicoService],
    }).compile();

    service = module.get<EquilibrioDinamicoService>(EquilibrioDinamicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
