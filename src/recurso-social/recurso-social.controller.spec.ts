import { Test, TestingModule } from '@nestjs/testing';
import { RecursoSocialController } from './recurso-social.controller';
import { RecursoSocialService } from './recurso-social.service';

describe('RecursoSocialController', () => {
  let controller: RecursoSocialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecursoSocialController],
      providers: [RecursoSocialService],
    }).compile();

    controller = module.get<RecursoSocialController>(RecursoSocialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
