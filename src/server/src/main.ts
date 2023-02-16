import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  app.use(cookieParser());

  // app.use(
  //   ['/api/docs', '/api/docs-json'],
  //   basicAuth({
  //     challenge: true,
  //     users: {
  //       [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
  //     },
  //   }),
  // );

  // OpenAPI
  const config = new DocumentBuilder()
    .setTitle('BTS live view count API')
    .setDescription('BTS live view count API Specification')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
