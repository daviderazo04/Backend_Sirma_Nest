import { Test, TestingModule } from '@nestjs/testing';
import { GinecologicoService } from './ginecologico.service';

describe('GinecologicoService', () => {
  let service: GinecologicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GinecologicoService],
    }).compile();

    service = module.get<GinecologicoService>(GinecologicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
