import { Module, OnModuleInit } from '@nestjs/common';
import { InjectConnection, TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'robsonDantas',
      password: 'henrique2905@',
      database: 'okr-backend',
      autoLoadEntities: true, // Carrega automaticamente todas as entidades registradas.
      synchronize: true, // Sincroniza automaticamente o esquema com o banco, ideal para desenvolvimento
    }),
  ],
})
export class AppModule implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    try {
      await this.connection.query('SELECT 1'); // Teste de query simples
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados:', error);
    }
  }
}
