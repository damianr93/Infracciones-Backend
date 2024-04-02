import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateCombustibleDto } from './dto/create-combustible.dto';
import { UpdateCombustibleDto } from './dto/update-combustible.dto';
import { Model } from 'mongoose';
import { Combustible } from './interfaces/combustible.interface';

@Injectable()
export class CombustibleService {

  constructor(
    @Inject('COMBUSTIBLE_MODEL')
    private readonly combustibleModel: Model<Combustible>
  ) { }

  async create(createCombustibleDto: CreateCombustibleDto) {

    if(await this.combustibleModel.countDocuments() === 1) {

      throw new HttpException('Ya existe un registro', HttpStatus.BAD_REQUEST);

    }

    return await this.combustibleModel.create(createCombustibleDto);
  }

  findAll() {
    return this.combustibleModel.find();
  }

  update(id: string, updateCombustibleDto: UpdateCombustibleDto) {

    updateCombustibleDto.fecha_actualizacion = new Date().toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    return this.combustibleModel.findByIdAndUpdate(id, updateCombustibleDto, { new: true });
  }

  remove(id: string) {
    return this.combustibleModel.findByIdAndDelete(id);
  }
}
