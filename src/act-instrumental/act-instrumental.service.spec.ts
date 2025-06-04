import { Test, TestingModule } from '@nestjs/testing';
import { ActInstrumentalService } from './act-instrumental.service';

describe('ActInstrumentalService', () => {
  let service: ActInstrumentalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActInstrumentalService],
    }).compile();

    service = module.get<ActInstrumentalService>(ActInstrumentalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
