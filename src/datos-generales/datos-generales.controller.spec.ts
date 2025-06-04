import { Test, TestingModule } from '@nestjs/testing';
import { DatosGeneralesController } from './datos-generales.controller';
import { DatosGeneralesService } from './datos-generales.service';

describe('DatosGeneralesController', () => {
  let controller: DatosGeneralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosGeneralesController],
      providers: [DatosGeneralesService],
    }).compile();

    controller = module.get<DatosGeneralesController>(DatosGeneralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
