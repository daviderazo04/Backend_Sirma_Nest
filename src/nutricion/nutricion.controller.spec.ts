import { Test, TestingModule } from '@nestjs/testing';
import { NutricionController } from './nutricion.controller';
import { NutricionService } from './nutricion.service';

describe('NutricionController', () => {
  let controller: NutricionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutricionController],
      providers: [NutricionService],
    }).compile();

    controller = module.get<NutricionController>(NutricionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
