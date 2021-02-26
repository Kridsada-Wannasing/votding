import { Module } from '@nestjs/common';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
