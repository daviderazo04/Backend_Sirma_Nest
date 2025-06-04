import { Test, TestingModule } from '@nestjs/testing';
import { AndrologicoService } from './andrologico.service';

describe('AndrologicoService', () => {
  let service: AndrologicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AndrologicoService],
    }).compile();

    service = module.get<AndrologicoService>(AndrologicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
