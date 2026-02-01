import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Equipos y Jugadores')
    .setDescription('Documentación de endpoints RESTful para gestión de equipos deportivos y sus jugadores')
    .setVersion('1.0')
    .addTag('teams', 'Operaciones relacionadas con equipos')
    .addTag('players', 'Operaciones relacionadas con jugadores')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Habilitar CORS
  app.enableCors();

  await app.listen(3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
  console.log('📚 Documentación Swagger disponible en http://localhost:3000/api');
}
bootstrap();
