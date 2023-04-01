import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getTypeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: 'root',
    password: 'SomtoAnene32!',
    database: 'vd_portal',
    entities: [
        __dirname + '/../**/*.entities{.ts,.js}',
    ],
    autoLoadEntities: true,
    synchronize: true

}