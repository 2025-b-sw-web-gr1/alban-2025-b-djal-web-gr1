import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para pruebas
  app.enableCors();
  
  await app.listen(3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
}
bootstrap();
