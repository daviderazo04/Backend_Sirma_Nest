import { Test, TestingModule } from '@nestjs/testing';
import { SeguimientoFisioterapiaService } from './seguimiento-fisioterapia.service';

describe('SeguimientoFisioterapiaService', () => {
  let service: SeguimientoFisioterapiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeguimientoFisioterapiaService],
    }).compile();

    service = module.get<SeguimientoFisioterapiaService>(SeguimientoFisioterapiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
