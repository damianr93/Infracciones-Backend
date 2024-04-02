import { Test, TestingModule } from '@nestjs/testing';
import { TTurismoController } from './t-turismo.controller';
import { TTurismoService } from './t-turismo.service';

describe('TTurismoController', () => {
  let controller: TTurismoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TTurismoController],
      providers: [TTurismoService],
    }).compile();

    controller = module.get<TTurismoController>(TTurismoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
