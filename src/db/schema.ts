
import { relations, sql } from "drizzle-orm";
import { integer, pgEnum, pgSchema, pgTable, serial, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const authSchema = pgSchema("auth");

export const Users = authSchema.table("users", {
    id: uuid("id").primaryKey(),
});

export const categoryEnum = pgEnum('category', ['apps', 'games']);


export const profiles = pgTable('profiles', {
    id: uuid('id').primaryKey().references(() => Users.id, { onDelete: 'cascade' }),
    name: varchar('name', { length: 256 }).notNull().unique().default(sql`'user-' || gen_random_uuid()`,),
    bio: varchar("bio", { length: 256 }),
    avatar_url: varchar("avatar_url", { length: 256 }),
    created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// export const profilesRelations = relations(profiles, ({ many }) => ({
//     posts: many(posts)
// }))

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    author_id: uuid('author_id').references(() => profiles.id),
    product_id: integer('product_id').references(() => products.id),
    created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    description: text("bio").notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    image_url: varchar("image_url", { length: 256 }).notNull(),
    price: integer('price').notNull()
})

// export const postsRelations = relations(posts, ({ one }) => ({
//     author: one(profiles, {
//         fields: [posts.author_id],
//         references: [profiles.id]
//     })
// }))


export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    category: categoryEnum(),
    image_url: varchar("image_url", { length: 256 }).notNull(),
})


