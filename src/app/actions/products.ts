'use server'

import { db } from "@/db";
import { products } from "@/db/schema";

export const getProducts = async () => {
    const options = await db.select({ id: products.id, name: products.name, category: products.category }).from(products);
    
    return options
}


export const getPopularGames = async () => {
    return await db.select().from(products).limit(10);
}