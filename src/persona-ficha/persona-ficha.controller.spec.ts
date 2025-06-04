import { Test, TestingModule } from '@nestjs/testing';
import { PersonaFichaController } from './persona-ficha.controller';
import { PersonaFichaService } from './persona-ficha.service';

describe('PersonaFichaController', () => {
  let controller: PersonaFichaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaFichaController],
      providers: [PersonaFichaService],
    }).compile();

    controller = module.get<PersonaFichaController>(PersonaFichaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
