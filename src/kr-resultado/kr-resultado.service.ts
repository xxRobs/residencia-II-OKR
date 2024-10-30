import { Injectable } from '@nestjs/common';
import { CreateKrResultadoDto } from './dto/create-kr-resultado.dto';
import { UpdateKrResultadoDto } from './dto/update-kr-resultado.dto';

@Injectable()
export class KrResultadoService {
  create(createKrResultadoDto: CreateKrResultadoDto) {
    return 'This action adds a new krResultado';
  }

  findAll() {
    return `This action returns all krResultado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} krResultado`;
  }

  update(id: number, updateKrResultadoDto: UpdateKrResultadoDto) {
    return `This action updates a #${id} krResultado`;
  }

  remove(id: number) {
    return `This action removes a #${id} krResultado`;
  }
}
