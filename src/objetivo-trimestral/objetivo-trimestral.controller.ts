import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjetivoTrimestralService } from './objetivo-trimestral.service';
import { CreateObjetivoTrimestralDto } from './dto/create-objetivo-trimestral.dto';
import { UpdateObjetivoTrimestralDto } from './dto/update-objetivo-trimestral.dto';

@Controller('objetivo-trimestral')
export class ObjetivoTrimestralController {
  constructor(private readonly objetivoTrimestralService: ObjetivoTrimestralService) {}

  @Post()
  create(@Body() createObjetivoTrimestralDto: CreateObjetivoTrimestralDto) {
    return this.objetivoTrimestralService.create(createObjetivoTrimestralDto);
  }

  @Get()
  findAll() {
    return this.objetivoTrimestralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objetivoTrimestralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjetivoTrimestralDto: UpdateObjetivoTrimestralDto) {
    return this.objetivoTrimestralService.update(+id, updateObjetivoTrimestralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objetivoTrimestralService.remove(+id);
  }
}
