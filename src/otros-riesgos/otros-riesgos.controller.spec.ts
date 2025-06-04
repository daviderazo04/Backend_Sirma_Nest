import { Test, TestingModule } from '@nestjs/testing';
import { OtrosRiesgosController } from './otros-riesgos.controller';
import { OtrosRiesgosService } from './otros-riesgos.service';

describe('OtrosRiesgosController', () => {
  let controller: OtrosRiesgosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtrosRiesgosController],
      providers: [OtrosRiesgosService],
    }).compile();

    controller = module.get<OtrosRiesgosController>(OtrosRiesgosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
