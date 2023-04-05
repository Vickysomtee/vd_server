import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Vocational Director Portal')
  .setDescription("API for the VD Portal")
  .setVersion('v1')
  .addTag('books')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('api');
  await app.listen(+process.env.PORT);
}
bootstrap();
