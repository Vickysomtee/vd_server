import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { typeOrmConfig } from './database/database.provider';
import { AuthModule } from './auth/auth.module';
import { SeminariansModule } from './seminarians/seminarians.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    SeminariansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
