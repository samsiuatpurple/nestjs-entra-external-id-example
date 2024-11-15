import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { config } from 'dotenv';

config();
console.log(
    `
    host: ${process.env.DB_HOST},
    port: ${parseInt(process.env.DB_PORT)},
    username: ${process.env.DB_USERNAME},
    password: ${process.env.DB_PASSWORD},
    database: ${process.env.DB_DATABASE},`,
);
export const dbConfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '**/**.entity{.ts,.js}'],
    migrations: [__dirname + 'src/database/migrations/**.ts'],
    logging: true,
};
