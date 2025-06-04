import { Test, TestingModule } from '@nestjs/testing';
import { CognitivoController } from './cognitivo.controller';
import { CognitivoService } from './cognitivo.service';

describe('CognitivoController', () => {
  let controller: CognitivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CognitivoController],
      providers: [CognitivoService],
    }).compile();

    controller = module.get<CognitivoController>(CognitivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
