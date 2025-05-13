// place files you want to import through the `$lib` alias in this folder.

import { drizzle } from 'drizzle-orm/libsql'
import { post, user } from "./server/db/schema"
import { createClient } from '@libsql/client'

let schema = {...user,...post}

const config = {
  url: process.env.DATABASE_URL || 'file:local.db',
}

const client = createClient(config)

export const db = drizzle(client, {schema})
