import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ObjetivoAnualService } from './objetivo-anual.service';
import { ObjetivoAnual } from './entities/objetivo-anual.entity';

@Controller('objetivo-anual')
export class ObjetivoAnualController {
  constructor(private readonly objetivoAnualService: ObjetivoAnualService) {}

  @Get()
  findAll() {
    return this.objetivoAnualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.objetivoAnualService.findOne(id);
  }

  @Post()
  create(@Body() objetivoAnual: ObjetivoAnual) {
    return this.objetivoAnualService.create(objetivoAnual);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() objetivoAnual: ObjetivoAnual) {
    return this.objetivoAnualService.update(id, objetivoAnual);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.objetivoAnualService.remove(id);
  }
}
