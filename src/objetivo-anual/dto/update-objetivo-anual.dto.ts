import { PartialType } from '@nestjs/mapped-types';
import { CreateObjetivoAnualDto } from './create-objetivo-anual.dto';

export class UpdateObjetivoAnualDto extends PartialType(CreateObjetivoAnualDto) {}
