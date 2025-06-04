import { Test, TestingModule } from '@nestjs/testing';
import { SeguimientoSaludController } from './seguimiento-salud.controller';
import { SeguimientoSaludService } from './seguimiento-salud.service';

describe('SeguimientoSaludController', () => {
  let controller: SeguimientoSaludController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguimientoSaludController],
      providers: [SeguimientoSaludService],
    }).compile();

    controller = module.get<SeguimientoSaludController>(SeguimientoSaludController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
