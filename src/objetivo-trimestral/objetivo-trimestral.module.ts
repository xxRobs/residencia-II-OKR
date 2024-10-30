import { Module } from '@nestjs/common';
import { ObjetivoTrimestralService } from './objetivo-trimestral.service';
import { ObjetivoTrimestralController } from './objetivo-trimestral.controller';

@Module({
  controllers: [ObjetivoTrimestralController],
  providers: [ObjetivoTrimestralService],
})
export class ObjetivoTrimestralModule {}
