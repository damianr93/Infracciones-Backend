import { Test, TestingModule } from '@nestjs/testing';
import { ActasController } from './actas.controller';
import { ActasService } from './actas.service';

describe('ActasController', () => {
  let controller: ActasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActasController],
      providers: [ActasService],
    }).compile();

    controller = module.get<ActasController>(ActasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
