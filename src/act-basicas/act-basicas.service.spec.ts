import { Test, TestingModule } from '@nestjs/testing';
import { ActBasicasService } from './act-basicas.service';

describe('ActBasicasService', () => {
  let service: ActBasicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActBasicasService],
    }).compile();

    service = module.get<ActBasicasService>(ActBasicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
