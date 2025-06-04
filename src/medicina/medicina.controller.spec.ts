import { Test, TestingModule } from '@nestjs/testing';
import { MedicinaController } from './medicina.controller';
import { MedicinaService } from './medicina.service';

describe('MedicinaController', () => {
  let controller: MedicinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicinaController],
      providers: [MedicinaService],
    }).compile();

    controller = module.get<MedicinaController>(MedicinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
