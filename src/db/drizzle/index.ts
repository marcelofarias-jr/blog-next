import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { postsTable } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    posts: postsTable,
  },
  logger: false,
});

function ensurePostsTable() {
  try {
    sqliteDatabase.prepare('SELECT 1 FROM posts LIMIT 1').get();
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('no such table: posts')) {
        const migrationsFolder = resolve(
          process.cwd(),
          'src',
          'db',
          'drizzle',
          'migrations',
        );
        migrate(drizzleDb, { migrationsFolder });
        return;
      }
    }

    throw error;
  }
}

ensurePostsTable();
