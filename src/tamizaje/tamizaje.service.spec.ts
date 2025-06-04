import { Test, TestingModule } from '@nestjs/testing';
import { TamizajeService } from './tamizaje.service';

describe('TamizajeService', () => {
  let service: TamizajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TamizajeService],
    }).compile();

    service = module.get<TamizajeService>(TamizajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
