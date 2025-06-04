import { Test, TestingModule } from '@nestjs/testing';
import { ZonadolorService } from './zonadolor.service';

describe('ZonadolorService', () => {
  let service: ZonadolorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZonadolorService],
    }).compile();

    service = module.get<ZonadolorService>(ZonadolorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
