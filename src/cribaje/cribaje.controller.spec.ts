import { Test, TestingModule } from '@nestjs/testing';
import { CribajeController } from './cribaje.controller';
import { CribajeService } from './cribaje.service';

describe('CribajeController', () => {
  let controller: CribajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CribajeController],
      providers: [CribajeService],
    }).compile();

    controller = module.get<CribajeController>(CribajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
