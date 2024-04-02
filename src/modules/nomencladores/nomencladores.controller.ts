import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NomencladoresService } from './nomencladores.service';
import { CreateNomencladoreDto } from './dto/create-nomencladore.dto';

@Controller('nomencladores')
export class NomencladoresController {
  constructor(private readonly nomencladoresService: NomencladoresService) {}

  @Post()
  create(@Body() createNomencladoreDto: CreateNomencladoreDto) {
    console.log("🚀 ~ NomencladoresController ~ create ~ createNomencladoreDto:", createNomencladoreDto)
    return this.nomencladoresService.create(createNomencladoreDto);
  }

  @Get()
  findAll() {
    return this.nomencladoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomencladoresService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNomencladoreDto: Partial<CreateNomencladoreDto>,
  ) {
    return this.nomencladoresService.update(id, updateNomencladoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomencladoresService.remove(id);
  }
}
