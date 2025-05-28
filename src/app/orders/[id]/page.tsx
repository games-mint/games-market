'use server'
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { deals, posts, profiles } from "@/db/schema";

import OrderPage from "./orderPage";

export default async function ({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params;


    const ordersDataFull = (await db.select().from(deals).leftJoin(posts, eq(posts.id, deals.postId)).leftJoin(profiles, eq(profiles.id, deals.sellerId)).where(eq(deals.id, id)))[0];

    const order = {
        deal: ordersDataFull.deals,
        offer: ordersDataFull.posts!,
        seller: ordersDataFull.profiles!
    };


    return (
        <OrderPage order={order} />
    )
}