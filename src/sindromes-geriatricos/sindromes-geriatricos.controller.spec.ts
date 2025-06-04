import { Test, TestingModule } from '@nestjs/testing';
import { SindromesGeriatricosController } from './sindromes-geriatricos.controller';
import { SindromesGeriatricosService } from './sindromes-geriatricos.service';

describe('SindromesGeriatricosController', () => {
  let controller: SindromesGeriatricosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SindromesGeriatricosController],
      providers: [SindromesGeriatricosService],
    }).compile();

    controller = module.get<SindromesGeriatricosController>(SindromesGeriatricosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
