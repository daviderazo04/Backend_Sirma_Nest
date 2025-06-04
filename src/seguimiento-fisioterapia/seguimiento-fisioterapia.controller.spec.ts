import { Test, TestingModule } from '@nestjs/testing';
import { SeguimientoFisioterapiaController } from './seguimiento-fisioterapia.controller';
import { SeguimientoFisioterapiaService } from './seguimiento-fisioterapia.service';

describe('SeguimientoFisioterapiaController', () => {
  let controller: SeguimientoFisioterapiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguimientoFisioterapiaController],
      providers: [SeguimientoFisioterapiaService],
    }).compile();

    controller = module.get<SeguimientoFisioterapiaController>(SeguimientoFisioterapiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
