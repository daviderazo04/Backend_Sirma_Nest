import { Test, TestingModule } from '@nestjs/testing';
import { RevisionActualService } from './revision-actual.service';

describe('RevisionActualService', () => {
  let service: RevisionActualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevisionActualService],
    }).compile();

    service = module.get<RevisionActualService>(RevisionActualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
