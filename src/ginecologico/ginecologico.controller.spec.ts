import { Test, TestingModule } from '@nestjs/testing';
import { GinecologicoController } from './ginecologico.controller';
import { GinecologicoService } from './ginecologico.service';

describe('GinecologicoController', () => {
  let controller: GinecologicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GinecologicoController],
      providers: [GinecologicoService],
    }).compile();

    controller = module.get<GinecologicoController>(GinecologicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
