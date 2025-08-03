import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true ,forbidNonWhitelisted: true }));
  const config = new DocumentBuilder()
    .setTitle('My API') 
    .setDescription('API documentation for my app')
    .setVersion('1.0') 
    .addSecurity('bearer', {type: 'http',scheme: 'bearer',})
    .addBearerAuth() 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
