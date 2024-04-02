import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorralonesService } from './corralones.service';
import { CreateCorraloneDto } from './dto/create-corralone.dto';

@Controller('corralones')
export class CorralonesController {
  constructor(private readonly corralonesService: CorralonesService) {}

  @Post()
  create(@Body() createCorraloneDto: CreateCorraloneDto) {
    return this.corralonesService.create(createCorraloneDto);
  }

  @Get()
  findAll() {
    return this.corralonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corralonesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorraloneDto: Partial<CreateCorraloneDto>) {
    return this.corralonesService.update(id, updateCorraloneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corralonesService.remove(id);
  }
}
