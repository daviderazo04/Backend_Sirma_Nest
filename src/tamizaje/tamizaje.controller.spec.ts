import { Test, TestingModule } from '@nestjs/testing';
import { TamizajeController } from './tamizaje.controller';
import { TamizajeService } from './tamizaje.service';

describe('TamizajeController', () => {
  let controller: TamizajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TamizajeController],
      providers: [TamizajeService],
    }).compile();

    controller = module.get<TamizajeController>(TamizajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
