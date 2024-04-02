import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TaxisRemis } from './interface/taxi-remis.interface';
import { CreateTaxiRemisDto } from './dto/create-taxi-remi.dto copy';
import { UpdateTaxiRemisDto } from './dto/update-taxi-remi.dto';


@Injectable()
export class TaxiRemisService {

  constructor(
    @Inject('TAXI_REMIS')
    private readonly taxiRemisModel: Model<TaxisRemis>
  ){}

  create(createTaxiRemiDto: CreateTaxiRemisDto) {
    return this.taxiRemisModel.create(createTaxiRemiDto);
  }

  findAll() {
    // find all order desc
    return this.taxiRemisModel.find().sort({createdAt: -1});
  }

  findOne(id: string) {
    return this.taxiRemisModel.findById(id);
  }

  update(id: string, updateTaxiRemiDto: UpdateTaxiRemisDto) {
    return this.taxiRemisModel.findByIdAndUpdate(id, updateTaxiRemiDto,{ new:true });
  }

  remove(id: string) {
    return this.taxiRemisModel.findByIdAndDelete(id);
  }
}
