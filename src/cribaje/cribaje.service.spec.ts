import { Test, TestingModule } from '@nestjs/testing';
import { CribajeService } from './cribaje.service';

describe('CribajeService', () => {
  let service: CribajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CribajeService],
    }).compile();

    service = module.get<CribajeService>(CribajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
