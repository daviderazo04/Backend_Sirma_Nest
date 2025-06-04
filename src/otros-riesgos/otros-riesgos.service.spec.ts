import { Test, TestingModule } from '@nestjs/testing';
import { OtrosRiesgosService } from './otros-riesgos.service';

describe('OtrosRiesgosService', () => {
  let service: OtrosRiesgosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtrosRiesgosService],
    }).compile();

    service = module.get<OtrosRiesgosService>(OtrosRiesgosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
