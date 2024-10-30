import { Module } from '@nestjs/common';
import { ObjetivoAnualController } from './objetivo-anual.controller';
import { ObjetivoAnualService } from './objetivo-anual.service';

@Module({
  controllers: [ObjetivoAnualController],
  providers: [ObjetivoAnualService],
})
export class ObjetivoAnualModule {}
