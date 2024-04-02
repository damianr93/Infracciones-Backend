import { Inject, Injectable } from '@nestjs/common';
import { CreateCorraloneDto } from './dto/create-corralone.dto';
import { Model } from 'mongoose';
import { Corralones } from './interfaces/corralones.interface';

@Injectable()
export class CorralonesService {

  constructor(
    @Inject('CORRALONES_MODEL')
    private readonly corralonesModel : Model<Corralones>
  ){}

  create(createCorraloneDto: CreateCorraloneDto) {
    return this.corralonesModel.create(createCorraloneDto);
  }

  findAll() {
    return this.corralonesModel.find();
  }

  findOne(id: string) {
    return this.corralonesModel.findById(id);
  }

  update(id: string, updateCorraloneDto: Partial<CreateCorraloneDto>) {
    return this.corralonesModel.findByIdAndUpdate(id, updateCorraloneDto, { new : true });
  }

  remove(id: string) {
    return this.corralonesModel.findByIdAndDelete(id);
  }
}
