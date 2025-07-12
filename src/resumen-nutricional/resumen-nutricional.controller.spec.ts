import { Test, TestingModule } from '@nestjs/testing';
import { ResumenNutricionalController } from './resumen-nutricional.controller';
import { ResumenNutricionalService } from './resumen-nutricional.service';

describe('ResumenNutricionalController', () => {
  let controller: ResumenNutricionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumenNutricionalController],
      providers: [ResumenNutricionalService],
    }).compile();

    controller = module.get<ResumenNutricionalController>(ResumenNutricionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
