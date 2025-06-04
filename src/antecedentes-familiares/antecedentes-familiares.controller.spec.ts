import { Test, TestingModule } from '@nestjs/testing';
import { AntecedentesFamiliaresController } from './antecedentes-familiares.controller';
import { AntecedentesFamiliaresService } from './antecedentes-familiares.service';

describe('AntecedentesFamiliaresController', () => {
  let controller: AntecedentesFamiliaresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AntecedentesFamiliaresController],
      providers: [AntecedentesFamiliaresService],
    }).compile();

    controller = module.get<AntecedentesFamiliaresController>(AntecedentesFamiliaresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
