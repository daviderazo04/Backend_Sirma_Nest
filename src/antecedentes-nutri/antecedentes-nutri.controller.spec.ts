import { Test, TestingModule } from '@nestjs/testing';
import { AntecedentesNutriController } from './antecedentes-nutri.controller';
import { AntecedentesNutriService } from './antecedentes-nutri.service';

describe('AntecedentesNutriController', () => {
  let controller: AntecedentesNutriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AntecedentesNutriController],
      providers: [AntecedentesNutriService],
    }).compile();

    controller = module.get<AntecedentesNutriController>(AntecedentesNutriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
