import { Test, TestingModule } from '@nestjs/testing';
import { DolorFisioService } from './dolor-fisio.service';

describe('DolorFisioService', () => {
  let service: DolorFisioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DolorFisioService],
    }).compile();

    service = module.get<DolorFisioService>(DolorFisioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
