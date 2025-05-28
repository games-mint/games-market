'use server'

import { db } from "@/db"
import { posts, profiles } from "@/db/schema"
import { eq } from "drizzle-orm";

export const getRecomendedPosts = async () => {
    return await db.select().from(posts).leftJoin(profiles, eq(profiles.id, posts.authorId)).limit(10);
}