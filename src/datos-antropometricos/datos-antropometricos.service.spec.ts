import { Test, TestingModule } from '@nestjs/testing';
import { DatosAntropometricosService } from './datos-antropometricos.service';

describe('DatosAntropometricosService', () => {
  let service: DatosAntropometricosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatosAntropometricosService],
    }).compile();

    service = module.get<DatosAntropometricosService>(DatosAntropometricosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
