import { Test, TestingModule } from '@nestjs/testing';
import { EnfermeriaController } from './enfermeria.controller';
import { EnfermeriaService } from './enfermeria.service';

describe('EnfermeriaController', () => {
  let controller: EnfermeriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnfermeriaController],
      providers: [EnfermeriaService],
    }).compile();

    controller = module.get<EnfermeriaController>(EnfermeriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
