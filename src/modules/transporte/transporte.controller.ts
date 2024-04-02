import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { CreateTransporteDto } from './dto/create-transporte.dto';
import { UpdateTranporteDto } from './dto/update-transporte.dto';

@Controller('transporte')
export class TransporteController {
  constructor(private readonly transporteService: TransporteService) {}

  @Post()
  create(@Body() createTAridoDto: CreateTransporteDto) {
    return this.transporteService.create(createTAridoDto);
  }

  @Get()
  findAll() {
    return this.transporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transporteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTAridoDto: UpdateTranporteDto) {
    return this.transporteService.update(id, updateTAridoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transporteService.remove(id);
  }
}
