import { Test, TestingModule } from '@nestjs/testing';
import { ExamenSistemicoController } from './examen-sistemico.controller';
import { ExamenSistemicoService } from './examen-sistemico.service';

describe('ExamenSistemicoController', () => {
  let controller: ExamenSistemicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamenSistemicoController],
      providers: [ExamenSistemicoService],
    }).compile();

    controller = module.get<ExamenSistemicoController>(ExamenSistemicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
