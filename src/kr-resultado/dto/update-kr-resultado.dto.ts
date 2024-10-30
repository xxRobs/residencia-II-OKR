import { PartialType } from '@nestjs/mapped-types';
import { CreateKrResultadoDto } from './create-kr-resultado.dto';

export class UpdateKrResultadoDto extends PartialType(CreateKrResultadoDto) {}
