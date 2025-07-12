import { Test, TestingModule } from '@nestjs/testing';
import { ResumenNutricionalService } from './resumen-nutricional.service';

describe('ResumenNutricionalService', () => {
  let service: ResumenNutricionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResumenNutricionalService],
    }).compile();

    service = module.get<ResumenNutricionalService>(ResumenNutricionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
