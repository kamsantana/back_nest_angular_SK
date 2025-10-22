import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import * as path from 'path';

const env = process.env.NODE_ENV || 'development';

const rootDir = path.resolve(__dirname, '..'); 

config({
  override: true,
  path: path.join(rootDir, `.env.${env}`),
});

const port = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 5432;

export default new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: port,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false, 
  logging: true, 
  entities: ['dist/**/*.entity.js'], 
  migrations: ['dist/database/migrations/*.js'], 
});