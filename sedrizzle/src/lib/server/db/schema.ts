import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { z } from 'zod';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	firstName: text('firstname').notNull(),
	email: text('email').notNull(),
	lastName: text('lastname').notNull(),
	age: integer('age')
});

export const post = sqliteTable('post', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	body: text('body').notNull(),

	authorId: integer("author_id").references(() => user.id, { onDelete: "cascade" }).notNull()
});

export const postSchema = z.object({
	id: z.number().int().positive().optional(),
	title: z.string(),
	body: z.string(),
	authorId: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive().int()),
})

export const userSchema = z.object({
	id: z.number().int().positive().optional(),
	firstName: z.string(),
	email: z.string(),
	lastName: z.string(),
	age: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive().int()),
})