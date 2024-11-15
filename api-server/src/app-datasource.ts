import { DataSource } from 'typeorm';
import { dbConfig } from './database-config';

export const appDataSource = new DataSource(dbConfig);
