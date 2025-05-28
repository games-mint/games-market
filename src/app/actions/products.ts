'use server'

import { db } from "@/db";
import { products } from "@/db/schema";

export const getProducts = async () => {
    const options = await db.select({ id: products.id, name: products.name, category: products.category }).from(products);
    
    return options
}