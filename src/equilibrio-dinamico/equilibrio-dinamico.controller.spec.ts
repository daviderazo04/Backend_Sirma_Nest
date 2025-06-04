import { Test, TestingModule } from '@nestjs/testing';
import { EquilibrioDinamicoController } from './equilibrio-dinamico.controller';
import { EquilibrioDinamicoService } from './equilibrio-dinamico.service';

describe('EquilibrioDinamicoController', () => {
  let controller: EquilibrioDinamicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquilibrioDinamicoController],
      providers: [EquilibrioDinamicoService],
    }).compile();

    controller = module.get<EquilibrioDinamicoController>(EquilibrioDinamicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
