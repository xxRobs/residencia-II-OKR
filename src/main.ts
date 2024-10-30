import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3000; // Defina a porta (pode ser carregada das variáveis de ambiente)

  // Inicializa o servidor
  await app.listen(PORT);

  // Obtém o endereço IP do servidor
  const serverAddress = app.getHttpServer().address();
  const host =
    serverAddress.address === '::' ? 'localhost' : serverAddress.address;
  const port = serverAddress.port;

  Logger.log(`Servidor rodando em http://${host}:${port}`, 'Bootstrap');
}

bootstrap();
