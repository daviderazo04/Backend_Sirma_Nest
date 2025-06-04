import { Test, TestingModule } from '@nestjs/testing';
import { FisioterapiaController } from './fisioterapia.controller';
import { FisioterapiaService } from './fisioterapia.service';

describe('FisioterapiaController', () => {
  let controller: FisioterapiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FisioterapiaController],
      providers: [FisioterapiaService],
    }).compile();

    controller = module.get<FisioterapiaController>(FisioterapiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
