import { drizzleDb } from '@/db/drizzle';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { resolve } from 'path';

const migrationsFolder = resolve(
  process.cwd(),
  'src',
  'db',
  'drizzle',
  'migrations',
);

migrate(drizzleDb, { migrationsFolder });
