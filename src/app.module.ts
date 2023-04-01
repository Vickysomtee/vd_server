import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'

import { getTypeOrmConfig } from './database/database.provider';

import { AuthModule } from './auth/auth.module';
import { SeminariansModule } from './seminarians/seminarians.module';

@Module({
  imports: [TypeOrmModule.forRoot(getTypeOrmConfig), ConfigModule.forRoot(),AuthModule, SeminariansModule],
  controllers: [],
  providers: [],

})
export class AppModule {}