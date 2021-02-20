import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        projectId: process.env.PROJECT_ID,
      }),
    });
  }

  const firestore = admin.firestore();
  fireorm.initialize(firestore);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
