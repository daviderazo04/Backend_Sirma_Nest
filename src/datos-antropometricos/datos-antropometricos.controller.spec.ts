import { Test, TestingModule } from '@nestjs/testing';
import { DatosAntropometricosController } from './datos-antropometricos.controller';
import { DatosAntropometricosService } from './datos-antropometricos.service';

describe('DatosAntropometricosController', () => {
  let controller: DatosAntropometricosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosAntropometricosController],
      providers: [DatosAntropometricosService],
    }).compile();

    controller = module.get<DatosAntropometricosController>(DatosAntropometricosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
