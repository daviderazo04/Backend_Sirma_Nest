import { Test, TestingModule } from '@nestjs/testing';
import { ZonadolorController } from './zonadolor.controller';
import { ZonadolorService } from './zonadolor.service';

describe('ZonadolorController', () => {
  let controller: ZonadolorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZonadolorController],
      providers: [ZonadolorService],
    }).compile();

    controller = module.get<ZonadolorController>(ZonadolorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
