import { Test, TestingModule } from '@nestjs/testing';
import { InfraccionesController } from './infracciones.controller';
import { InfraccionesService } from './infracciones.service';

describe('InfraccionesController', () => {
  let controller: InfraccionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfraccionesController],
      providers: [InfraccionesService],
    }).compile();

    controller = module.get<InfraccionesController>(InfraccionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
