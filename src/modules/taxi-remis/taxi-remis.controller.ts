import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxiRemisService } from './taxi-remis.service';
import { CreateTaxiRemisDto } from './dto/create-taxi-remi.dto copy';
import { UpdateTaxiRemisDto } from './dto/update-taxi-remi.dto';


@Controller('taxi-remis')
export class TaxiRemisController {
  constructor(private readonly taxiRemisService: TaxiRemisService) {}

  @Post()
  create(@Body() createTaxiRemiDto: CreateTaxiRemisDto) {
    return this.taxiRemisService.create(createTaxiRemiDto);
  }

  @Get()
  findAll() {
    return this.taxiRemisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxiRemisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxiRemiDto: UpdateTaxiRemisDto) {
    return this.taxiRemisService.update(id, updateTaxiRemiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxiRemisService.remove(id);
  }
}
