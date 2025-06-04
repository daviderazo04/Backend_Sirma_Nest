import { Test, TestingModule } from '@nestjs/testing';
import { AndrologicoController } from './andrologico.controller';
import { AndrologicoService } from './andrologico.service';

describe('AndrologicoController', () => {
  let controller: AndrologicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AndrologicoController],
      providers: [AndrologicoService],
    }).compile();

    controller = module.get<AndrologicoController>(AndrologicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
