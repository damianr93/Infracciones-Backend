import { Test, TestingModule } from '@nestjs/testing';
import { NomencladoresService } from './nomencladores.service';

describe('NomencladoresService', () => {
  let service: NomencladoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NomencladoresService],
    }).compile();

    service = module.get<NomencladoresService>(NomencladoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
