import { Module } from '@nestjs/common';
import { KrResultadoService } from './kr-resultado.service';
import { KrResultadoController } from './kr-resultado.controller';

@Module({
  controllers: [KrResultadoController],
  providers: [KrResultadoService],
})
export class KrResultadoModule {}
