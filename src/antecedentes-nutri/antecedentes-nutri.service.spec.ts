import { Test, TestingModule } from '@nestjs/testing';
import { AntecedentesNutriService } from './antecedentes-nutri.service';

describe('AntecedentesNutriService', () => {
  let service: AntecedentesNutriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntecedentesNutriService],
    }).compile();

    service = module.get<AntecedentesNutriService>(AntecedentesNutriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
