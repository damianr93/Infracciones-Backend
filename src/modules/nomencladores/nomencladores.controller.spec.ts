import { Test, TestingModule } from '@nestjs/testing';
import { NomencladoresController } from './nomencladores.controller';
import { NomencladoresService } from './nomencladores.service';

describe('NomencladoresController', () => {
  let controller: NomencladoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomencladoresController],
      providers: [NomencladoresService],
    }).compile();

    controller = module.get<NomencladoresController>(NomencladoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
