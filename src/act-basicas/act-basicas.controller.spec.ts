import { Test, TestingModule } from '@nestjs/testing';
import { ActBasicasController } from './act-basicas.controller';
import { ActBasicasService } from './act-basicas.service';

describe('ActBasicasController', () => {
  let controller: ActBasicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActBasicasController],
      providers: [ActBasicasService],
    }).compile();

    controller = module.get<ActBasicasController>(ActBasicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
