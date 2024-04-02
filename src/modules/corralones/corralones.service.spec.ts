import { Test, TestingModule } from '@nestjs/testing';
import { CorralonesService } from './corralones.service';

describe('CorralonesService', () => {
  let service: CorralonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorralonesService],
    }).compile();

    service = module.get<CorralonesService>(CorralonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
