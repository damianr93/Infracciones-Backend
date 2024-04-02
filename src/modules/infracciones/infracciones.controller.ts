import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { InfraccionesService } from './infracciones.service';
import { CreateInfraccioneDto } from './dto/create-infraccione.dto';
import { UpdateInfraccionesDto } from './dto/update-infraccione.dto';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('infracciones')
export class InfraccionesController {
  constructor(private readonly infraccionesService: InfraccionesService) {}

  @Post()
  create(@Body() createInfraccioneDto: CreateInfraccioneDto) {
    return this.infraccionesService.create(createInfraccioneDto);
  }

  @Get()
  findAll(@Query('zorroId') zorroId: string) {
    return this.infraccionesService.findAll(zorroId);
  }

  @Get('/ciudadano')
  findByDomain(
    @Query('dominioOrNumInfraccion') dominioOrNumInfraccion: string,
  ) {
    return this.infraccionesService.findByDomain(dominioOrNumInfraccion);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.infraccionesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInfraccioneDto: UpdateInfraccionesDto,
    @Request() req: any,
  ) {
    const userType = req.user?.tipo;
    return this.infraccionesService.update(id, updateInfraccioneDto, userType);
  }

  @Get('/byNum/:numInfraccion')
  findByNumInfraccion(@Param('numInfraccion') numInfraccion: string) {
    return this.infraccionesService.findByNumInfraccion(numInfraccion);
  }

  @Patch('/estado/:id')
  @UseGuards(RolesGuard)
  cambiarEstado(
    @Param('id') id: string,
    @Body() updateInfraccioneDto: UpdateInfraccionesDto,
  ) {
    return this.infraccionesService.cambiarEstado(id, updateInfraccioneDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.infraccionesService.remove(id);
  }

  @Post('/pago/:id')
  pagarInfraccion(@Param('id') id: string) {
    return this.infraccionesService.pagarInfraccion(id);
  }
}
