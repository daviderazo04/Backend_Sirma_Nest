import { Test, TestingModule } from '@nestjs/testing';
import { DepresionService } from './depresion.service';

describe('DepresionService', () => {
  let service: DepresionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepresionService],
    }).compile();

    service = module.get<DepresionService>(DepresionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
