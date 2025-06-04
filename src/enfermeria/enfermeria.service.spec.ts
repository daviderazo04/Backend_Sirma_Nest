import { Test, TestingModule } from '@nestjs/testing';
import { EnfermeriaService } from './enfermeria.service';

describe('EnfermeriaService', () => {
  let service: EnfermeriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnfermeriaService],
    }).compile();

    service = module.get<EnfermeriaService>(EnfermeriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
