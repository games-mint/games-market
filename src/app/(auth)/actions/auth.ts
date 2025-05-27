'use server'

import { db } from "@/db";
import { profiles } from "@/db/schema";
import { count, eq } from "drizzle-orm";

export async function checkUsernameUniqueness(username: string): Promise<boolean> {
    const existingUser = await db.select({ count: count() }).from(profiles).where(eq(profiles.name, username));

    return existingUser[0].count === 0;
}