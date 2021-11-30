import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice(
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3030,
        header: {
          "Access-Control-Allow-Methods" : "GET"
        }
      },
    }
  )
  app.enableCors();
  app.listen(3434);
}
bootstrap();