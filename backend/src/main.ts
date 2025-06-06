import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não declaradas no DTO
      forbidNonWhitelisted: true, // Lança erro se mandar propriedade desconhecida
      transform: true, // Converte payloads para instâncias de classes
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
