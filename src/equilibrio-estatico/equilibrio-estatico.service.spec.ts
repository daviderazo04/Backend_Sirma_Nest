import { Test, TestingModule } from '@nestjs/testing';
import { EquilibrioEstaticoService } from './equilibrio-estatico.service';

describe('EquilibrioEstaticoService', () => {
  let service: EquilibrioEstaticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquilibrioEstaticoService],
    }).compile();

    service = module.get<EquilibrioEstaticoService>(EquilibrioEstaticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
