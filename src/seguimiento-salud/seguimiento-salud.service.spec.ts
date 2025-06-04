import { Test, TestingModule } from '@nestjs/testing';
import { SeguimientoSaludService } from './seguimiento-salud.service';

describe('SeguimientoSaludService', () => {
  let service: SeguimientoSaludService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeguimientoSaludService],
    }).compile();

    service = module.get<SeguimientoSaludService>(SeguimientoSaludService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
