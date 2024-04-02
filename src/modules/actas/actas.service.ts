import { Inject, Injectable } from '@nestjs/common';
import { CreateActaDto } from './dto/create-acta.dto';
import { UpdateActaDto } from './dto/update-acta.dto';
import { Model } from 'mongoose';
import { Actas } from './interfaces/actas.interface';

@Injectable()
export class ActasService {

  constructor(
    @Inject('ACTAS_MODEL')
    private readonly actasModel:Model<Actas>
  ){}

  create(createActaDto: CreateActaDto) {
    return this.actasModel.create(createActaDto);
  }

  findAll() {
    return this.actasModel.find()
      .populate('juez')
      .populate('infraccion')
      .populate('corralon')
      .exec();
  };

  findOne(id: string) {
    return this.actasModel.findById(id)
      .populate('juez')
      .populate('infraccion')
      .populate('corralon')
      .exec();
  }

  update(id: string, updateActaDto: UpdateActaDto) {
    console.log(updateActaDto)
    return this.actasModel.findByIdAndUpdate(id, updateActaDto, {new:true})
      .populate('juez')
      .populate('infraccion')
      .populate('corralon')
      .exec();
  }

  remove(id: string) {
    return this.actasModel.findByIdAndDelete(id);
  }
}
