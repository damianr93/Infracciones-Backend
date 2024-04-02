import { Inject, Injectable } from '@nestjs/common';
import { CreateTranspTurismoDto } from './dto/t-turismo.dto';
import { Model } from 'mongoose';
import { TransporteTurismo } from './interfaces/t-turismo.interface';
import { UpdateTransporteTurismoDto } from './dto/update-t-turismo.dto';

@Injectable()
export class TTurismoService {

  constructor(
    @Inject('TRANSPORTE_TURISMO')
    private readonly tranposteTurismoModel: Model<TransporteTurismo>
  ){}

  create(createTTurismoDto: CreateTranspTurismoDto) {
    return this.tranposteTurismoModel.create(createTTurismoDto);
  }

  findAll(turismoId) {
    let query = {};
    if (turismoId) {
      query = { creado_por: turismoId };
    }
    return this.tranposteTurismoModel.find(query)
      .populate('creado_por');
  }

  findOne(id: string) {
    return this.tranposteTurismoModel.findById(id);
  }

  update(id: string, updateTTurismoDto: UpdateTransporteTurismoDto) {
    if(!updateTTurismoDto.estado) updateTTurismoDto.estado = 'Pendiente Revision'
    return this.tranposteTurismoModel.findByIdAndUpdate(id, updateTTurismoDto, {new:true});
  }

  remove(id: string) {
    return this.tranposteTurismoModel.findByIdAndDelete(id);
  }
}
