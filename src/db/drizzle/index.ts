import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { postsTable } from './schemas';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const drizzleDb = drizzle(client, {
  schema: {
    posts: postsTable,
  },
  logger: false,
});
