import { Module } from '@nestjs/common';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
