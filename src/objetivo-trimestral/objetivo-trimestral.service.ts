import { Injectable } from '@nestjs/common';
import { CreateObjetivoTrimestralDto } from './dto/create-objetivo-trimestral.dto';
import { UpdateObjetivoTrimestralDto } from './dto/update-objetivo-trimestral.dto';

@Injectable()
export class ObjetivoTrimestralService {
  create(createObjetivoTrimestralDto: CreateObjetivoTrimestralDto) {
    return 'This action adds a new objetivoTrimestral';
  }

  findAll() {
    return `This action returns all objetivoTrimestral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objetivoTrimestral`;
  }

  update(id: number, updateObjetivoTrimestralDto: UpdateObjetivoTrimestralDto) {
    return `This action updates a #${id} objetivoTrimestral`;
  }

  remove(id: number) {
    return `This action removes a #${id} objetivoTrimestral`;
  }
}
