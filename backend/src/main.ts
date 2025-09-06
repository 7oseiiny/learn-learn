import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    // Security: Helmet
    app.use(helmet());
    // Security: Rate Limiting
    app.use(rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      standardHeaders: true,
      legacyHeaders: false,
    }));
    const config = new DocumentBuilder()
      .setTitle('My API')
      .setDescription('API documentation for my app')
      .setVersion('1.0')
      .addSecurity('bearer', { type: 'http', scheme: 'bearer', })
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
    app.enableCors({
      origin: ['http://localhost:5173'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['Authorization'],
    });
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    logger.log(`Application started on http://localhost:${port}`);
  } catch (error) {
    const logger = new Logger('Bootstrap');
    logger.error('Error starting application', error);
    process.exit(1);
  }
}
bootstrap();
