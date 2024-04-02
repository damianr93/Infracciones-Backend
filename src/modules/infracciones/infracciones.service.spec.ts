import { Test, TestingModule } from '@nestjs/testing';
import { InfraccionesService } from './infracciones.service';

describe('InfraccionesService', () => {
  let service: InfraccionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfraccionesService],
    }).compile();

    service = module.get<InfraccionesService>(InfraccionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
