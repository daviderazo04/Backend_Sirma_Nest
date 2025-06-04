import { Test, TestingModule } from '@nestjs/testing';
import { ExamenRegionalController } from './examen-regional.controller';
import { ExamenRegionalService } from './examen-regional.service';

describe('ExamenRegionalController', () => {
  let controller: ExamenRegionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamenRegionalController],
      providers: [ExamenRegionalService],
    }).compile();

    controller = module.get<ExamenRegionalController>(ExamenRegionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
