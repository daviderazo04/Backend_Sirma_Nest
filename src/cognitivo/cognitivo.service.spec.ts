import { Test, TestingModule } from '@nestjs/testing';
import { CognitivoService } from './cognitivo.service';

describe('CognitivoService', () => {
  let service: CognitivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CognitivoService],
    }).compile();

    service = module.get<CognitivoService>(CognitivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
