import { PartialType } from '@nestjs/mapped-types';
import { CreateObjetivoTrimestralDto } from './create-objetivo-trimestral.dto';

export class UpdateObjetivoTrimestralDto extends PartialType(CreateObjetivoTrimestralDto) {}
