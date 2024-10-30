import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KrResultadoService } from './kr-resultado.service';
import { CreateKrResultadoDto } from './dto/create-kr-resultado.dto';
import { UpdateKrResultadoDto } from './dto/update-kr-resultado.dto';

@Controller('kr-resultado')
export class KrResultadoController {
  constructor(private readonly krResultadoService: KrResultadoService) {}

  @Post()
  create(@Body() createKrResultadoDto: CreateKrResultadoDto) {
    return this.krResultadoService.create(createKrResultadoDto);
  }

  @Get()
  findAll() {
    return this.krResultadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.krResultadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKrResultadoDto: UpdateKrResultadoDto) {
    return this.krResultadoService.update(+id, updateKrResultadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.krResultadoService.remove(+id);
  }
}
