import { Test, TestingModule } from '@nestjs/testing';
import { TaxiRemisService } from './taxi-remis.service';

describe('TaxiRemisService', () => {
  let service: TaxiRemisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxiRemisService],
    }).compile();

    service = module.get<TaxiRemisService>(TaxiRemisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
