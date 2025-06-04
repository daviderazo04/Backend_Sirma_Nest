import { Test, TestingModule } from '@nestjs/testing';
import { SindromesGeriatricosService } from './sindromes-geriatricos.service';

describe('SindromesGeriatricosService', () => {
  let service: SindromesGeriatricosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SindromesGeriatricosService],
    }).compile();

    service = module.get<SindromesGeriatricosService>(SindromesGeriatricosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
