import { Test, TestingModule } from '@nestjs/testing';
import { AntecedentesFamiliaresService } from './antecedentes-familiares.service';

describe('AntecedentesFamiliaresService', () => {
  let service: AntecedentesFamiliaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntecedentesFamiliaresService],
    }).compile();

    service = module.get<AntecedentesFamiliaresService>(AntecedentesFamiliaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
