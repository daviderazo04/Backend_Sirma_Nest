import { Test, TestingModule } from '@nestjs/testing';
import { RevisionActualController } from './revision-actual.controller';
import { RevisionActualService } from './revision-actual.service';

describe('RevisionActualController', () => {
  let controller: RevisionActualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevisionActualController],
      providers: [RevisionActualService],
    }).compile();

    controller = module.get<RevisionActualController>(RevisionActualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
