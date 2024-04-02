import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TTurismoService } from './t-turismo.service';
import { CreateTranspTurismoDto } from './dto/t-turismo.dto';
import { UpdateTransporteTurismoDto } from './dto/update-t-turismo.dto';


@Controller('t-turismo')
export class TTurismoController {
  constructor(private readonly tTurismoService: TTurismoService) {}

  @Post()
  create(@Body() createTTurismoDto: CreateTranspTurismoDto) {
    return this.tTurismoService.create(createTTurismoDto);
  }

  @Get()
  findAll(@Query('turismoId') turismoId:string) {
    return this.tTurismoService.findAll(turismoId);
  }

  @Get()

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tTurismoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTTurismoDto: UpdateTransporteTurismoDto) {
    return this.tTurismoService.update(id, updateTTurismoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tTurismoService.remove(id);
  }
}
