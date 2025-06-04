import { Test, TestingModule } from '@nestjs/testing';
import { FuerzaService } from './fuerza.service';

describe('FuerzaService', () => {
  let service: FuerzaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuerzaService],
    }).compile();

    service = module.get<FuerzaService>(FuerzaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
