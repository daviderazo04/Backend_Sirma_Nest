import { Test, TestingModule } from '@nestjs/testing';
import { ExamenSistemicoService } from './examen-sistemico.service';

describe('ExamenSistemicoService', () => {
  let service: ExamenSistemicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamenSistemicoService],
    }).compile();

    service = module.get<ExamenSistemicoService>(ExamenSistemicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
