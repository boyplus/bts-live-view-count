import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';

import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

// Module
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

// Schema
import { Admin, AdminSchema } from '../schemas/admin.schema';
import { AdminModule } from 'src/admin/admin.module';
import { AdminService } from 'src/admin/admin.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '30d'),
        },
      }),
    }),
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
    AdminModule,
  ],
  providers: [AuthService, GoogleStrategy, JwtStrategy, AdminService],
  controllers: [AuthController],
})
export class AuthModule {}
