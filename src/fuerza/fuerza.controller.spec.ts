import { Test, TestingModule } from '@nestjs/testing';
import { FuerzaController } from './fuerza.controller';
import { FuerzaService } from './fuerza.service';

describe('FuerzaController', () => {
  let controller: FuerzaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuerzaController],
      providers: [FuerzaService],
    }).compile();

    controller = module.get<FuerzaController>(FuerzaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
