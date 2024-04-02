import { Inject, Injectable } from '@nestjs/common';
import { CreateNomencladoreDto } from './dto/create-nomencladore.dto';
import { Nomenclador } from './interfaces/nomencladores.interface';
import { Model } from 'mongoose';

@Injectable()
export class NomencladoresService {
  constructor(
    @Inject('NOMENCLADORES_MODEL')
    private readonly nomencladoresModel: Model<Nomenclador>,
  ) {}

  create(createNomencladoreDto: CreateNomencladoreDto) {
    return this.nomencladoresModel.create(createNomencladoreDto);
  }

  findAll() {
    return this.nomencladoresModel.find().exec();
  }

  findOne(id: string) {
    return this.nomencladoresModel.findById(id).exec();
  }

  update(id: string, updateNomencladoreDto: Partial<CreateNomencladoreDto>) {
    return this.nomencladoresModel
      .findByIdAndUpdate(id, updateNomencladoreDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.nomencladoresModel.findByIdAndDelete(id).exec();
  }
}
