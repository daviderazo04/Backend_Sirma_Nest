import { Test, TestingModule } from '@nestjs/testing';
import { RecursoSocialService } from './recurso-social.service';

describe('RecursoSocialService', () => {
  let service: RecursoSocialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoSocialService],
    }).compile();

    service = module.get<RecursoSocialService>(RecursoSocialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
