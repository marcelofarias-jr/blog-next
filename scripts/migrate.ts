import { drizzleDb } from '@/db/drizzle';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

migrate(drizzleDb, { migrationsFolder: './drizzle' });
