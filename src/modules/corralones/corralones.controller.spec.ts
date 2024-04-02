import { Test, TestingModule } from '@nestjs/testing';
import { CorralonesController } from './corralones.controller';
import { CorralonesService } from './corralones.service';

describe('CorralonesController', () => {
  let controller: CorralonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorralonesController],
      providers: [CorralonesService],
    }).compile();

    controller = module.get<CorralonesController>(CorralonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
