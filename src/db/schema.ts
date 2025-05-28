
import { sql } from "drizzle-orm";
import { integer, pgEnum, pgSchema, pgTable, serial, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const authSchema = pgSchema("auth");

export const Users = authSchema.table("users", {
    id: uuid("id").primaryKey(),
});

export const categoryEnum = pgEnum('category', ['apps', 'games']);
export const dealStatusEnum = pgEnum('deal_status', ['started', 'user_paid', 'completed']);


export const profiles = pgTable('profiles', {
    id: uuid('id').primaryKey().references(() => Users.id, { onDelete: 'cascade' }),
    name: varchar('name', { length: 256 }).notNull().unique().default(sql`'user-' || gen_random_uuid()`,),
    bio: varchar("bio", { length: 256 }),
    avatarUrl: varchar("avatar_url", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    authorId: uuid('author_id').references(() => profiles.id).notNull(),
    productId: integer('product_id').references(() => products.id).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    description: text("bio").notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    imageUrl: varchar("image_url", { length: 256 }).notNull(),
    price: integer('price').notNull()
})


export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    category: categoryEnum().notNull(),
    imageUrl: varchar("image_url", { length: 256 }).notNull(),
})


export const deals = pgTable('deals', {
    id: serial('id').primaryKey(),
    sellerId: uuid('seller_id').references(() => profiles.id).notNull(),
    buyerId: uuid('buyer_id').references(() => profiles.id).notNull(),
    postId: integer('post_id').references(() => posts.id).notNull(),
    status: dealStatusEnum().notNull(),
    result: text('result'),
})


