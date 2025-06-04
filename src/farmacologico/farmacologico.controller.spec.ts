import { Test, TestingModule } from '@nestjs/testing';
import { FarmacologicoController } from './farmacologico.controller';
import { FarmacologicoService } from './farmacologico.service';

describe('FarmacologicoController', () => {
  let controller: FarmacologicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmacologicoController],
      providers: [FarmacologicoService],
    }).compile();

    controller = module.get<FarmacologicoController>(FarmacologicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
