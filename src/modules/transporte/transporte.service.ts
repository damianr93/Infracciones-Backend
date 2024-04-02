import { Inject, Injectable } from '@nestjs/common';
import { CreateTransporteDto } from './dto/create-transporte.dto';
import { Transporte } from './interfaces/transporte.interface';
import { Model } from 'mongoose';
import { UpdateTranporteDto } from './dto/update-transporte.dto';

@Injectable()
export class TransporteService {

  constructor(
    @Inject('TRANSPORTE_MODEL')
    private readonly transporteModel: Model<Transporte>,
  ) {}

  create(createTransporteAridoDto: CreateTransporteDto) {
    return this.transporteModel.create(createTransporteAridoDto);
  }

  findAll() {
    return this.transporteModel.find().sort({createdAt: -1});
  }

  findOne(id: string) {
    return this.transporteModel.findById(id);
  }

  update(id: string, updateTAridoDto: UpdateTranporteDto) {
    return this.transporteModel.findByIdAndUpdate( id, updateTAridoDto, {new:true});
  }

  remove(id: string) {
    return this.transporteModel.findByIdAndDelete(id);
  }
}
