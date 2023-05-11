import { ConfigService } from '@nestjs/config';

import { DataSource, DataSourceOptions } from 'typeorm';
import {config} from 'dotenv'

import { Seminarians } from 'src/entities/seminarian.entities';

config()

const configService = new ConfigService()

export const typeOrmConfig: DataSourceOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  // ssl: true,
  entities: [Seminarians,],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: true,
}

const dataSource = new DataSource(typeOrmConfig)

export default dataSource;

