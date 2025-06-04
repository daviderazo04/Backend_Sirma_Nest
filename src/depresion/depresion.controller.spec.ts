import { Test, TestingModule } from '@nestjs/testing';
import { DepresionController } from './depresion.controller';
import { DepresionService } from './depresion.service';

describe('DepresionController', () => {
  let controller: DepresionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepresionController],
      providers: [DepresionService],
    }).compile();

    controller = module.get<DepresionController>(DepresionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
