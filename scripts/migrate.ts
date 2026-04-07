import { drizzleDb } from '@/db/drizzle';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { resolve } from 'path';

const migrationsFolder = resolve(
  process.cwd(),
  'src',
  'db',
  'drizzle',
  'migrations',
);

await migrate(drizzleDb, { migrationsFolder });
