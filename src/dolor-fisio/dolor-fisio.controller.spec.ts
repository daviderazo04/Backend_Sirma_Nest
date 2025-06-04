import { Test, TestingModule } from '@nestjs/testing';
import { DolorFisioController } from './dolor-fisio.controller';
import { DolorFisioService } from './dolor-fisio.service';

describe('DolorFisioController', () => {
  let controller: DolorFisioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DolorFisioController],
      providers: [DolorFisioService],
    }).compile();

    controller = module.get<DolorFisioController>(DolorFisioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
