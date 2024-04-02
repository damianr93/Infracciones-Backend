import { Test, TestingModule } from '@nestjs/testing';
import { TTurismoService } from './t-turismo.service';

describe('TTurismoService', () => {
  let service: TTurismoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TTurismoService],
    }).compile();

    service = module.get<TTurismoService>(TTurismoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
