import { Test, TestingModule } from '@nestjs/testing';
import { TaxiRemisController } from './taxi-remis.controller';
import { TaxiRemisService } from './taxi-remis.service';

describe('TaxiRemisController', () => {
  let controller: TaxiRemisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxiRemisController],
      providers: [TaxiRemisService],
    }).compile();

    controller = module.get<TaxiRemisController>(TaxiRemisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
