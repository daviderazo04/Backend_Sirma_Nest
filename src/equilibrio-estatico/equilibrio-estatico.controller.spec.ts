import { Test, TestingModule } from '@nestjs/testing';
import { EquilibrioEstaticoController } from './equilibrio-estatico.controller';
import { EquilibrioEstaticoService } from './equilibrio-estatico.service';

describe('EquilibrioEstaticoController', () => {
  let controller: EquilibrioEstaticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquilibrioEstaticoController],
      providers: [EquilibrioEstaticoService],
    }).compile();

    controller = module.get<EquilibrioEstaticoController>(EquilibrioEstaticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
