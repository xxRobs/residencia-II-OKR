import { Module, OnModuleInit } from '@nestjs/common';
import { InjectConnection, TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any, // Tipo de banco, ex.: 'postgres'
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // Somente em desenvolvimento; para produção, use 'false'
    }),
  ],
})
export class AppModule implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    try {
      await this.connection.query('SELECT 1'); // Teste de conexão
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados:', error);
    }
  }
}
