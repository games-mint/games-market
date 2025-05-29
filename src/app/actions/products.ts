'use server'

import { db } from "@/db";
import { products } from "@/db/schema";
import { ilike } from "drizzle-orm";

export const getProducts = async () => {
    const options = await db.select({ id: products.id, name: products.name, category: products.category }).from(products);
    return options
}


export const getPopularGames = async () => {
    return await db.select().from(products).limit(10);
}

export const searchProducts = async (searchStr: string) => {
    return await db
        .select()
        .from(products)
        .where(ilike(products.name, `%${searchStr}%`));
}