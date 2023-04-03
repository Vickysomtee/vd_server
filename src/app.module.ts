import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { typeOrmAsyncConfig } from './database/database.provider';

import { AuthModule } from './auth/auth.module';
import { SeminariansModule } from './seminarians/seminarians.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    AuthModule,
    SeminariansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
