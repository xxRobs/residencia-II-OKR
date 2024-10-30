import { Module } from '@nestjs/common';
import { ObjetivoAnualService } from './objetivo-anual.service';
import { ObjetivoAnualController } from './objetivo-anual.controller';

@Module({
  controllers: [ObjetivoAnualController], // Define o controller de ObjetivoAnual
  providers: [ObjetivoAnualService], // Define o serviço de ObjetivoAnual
})
export class ObjetivoAnualModule {}
