import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

import { User } from './schemas/User';

const dbURL =
  process.env.DATABASE_URL ||
  'mongodb://localhost/keystone-sick-fits-tutorials';
const sessionConfig = {
  maxAge: 60 * 60 * 24, // 1 Day login time
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: dbURL,
    // TODO: Add Data Seeding
  },
  lists: createSchema({
    // TODO Schema items
    User,
  }),
  ui: {
    // TODO role based
    isAccessAllowed: () => true,
  },
  // TODO Session values
});