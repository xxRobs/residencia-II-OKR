import { Module, OnModuleInit } from '@nestjs/common';
import { InjectConnection, TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjetivoTrimestralModule } from './objetivo-trimestral/objetivo-trimestral.module';

dotenv.config(); // Carrega as variáveis de ambiente

@Module({
  imports: [
    ObjetivoTrimestralModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'okr_backend',
      // autoLoadEntities: true, // Carrega automaticamente todas as entidades registradas.
      synchronize: true, // Sincroniza automaticamente o esquema com o banco, ideal para desenvolvimento
      entities: [__dirname + '/*/.entity{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
