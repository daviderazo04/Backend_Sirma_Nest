import { Test, TestingModule } from '@nestjs/testing';
import { PersonaFichaService } from './persona-ficha.service';

describe('PersonaFichaService', () => {
  let service: PersonaFichaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaFichaService],
    }).compile();

    service = module.get<PersonaFichaService>(PersonaFichaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
