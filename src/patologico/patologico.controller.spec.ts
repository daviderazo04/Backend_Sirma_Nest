import { Test, TestingModule } from '@nestjs/testing';
import { PatologicoController } from './patologico.controller';
import { PatologicoService } from './patologico.service';

describe('PatologicoController', () => {
  let controller: PatologicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatologicoController],
      providers: [PatologicoService],
    }).compile();

    controller = module.get<PatologicoController>(PatologicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
