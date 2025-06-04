import { Test, TestingModule } from '@nestjs/testing';
import { ActInstrumentalController } from './act-instrumental.controller';
import { ActInstrumentalService } from './act-instrumental.service';

describe('ActInstrumentalController', () => {
  let controller: ActInstrumentalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActInstrumentalController],
      providers: [ActInstrumentalService],
    }).compile();

    controller = module.get<ActInstrumentalController>(ActInstrumentalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
