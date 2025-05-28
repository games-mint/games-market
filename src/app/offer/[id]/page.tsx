'use server'
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { posts, profiles } from "@/db/schema";

import OfferPage from "./offerPage";
import { Profile } from "@/common/types";

export default async function Page ({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params;

    const offer = (await db.select().from(posts).where(eq(posts.id, id)))[0];

    if (!offer)
        return;

    const seller: Profile = (await db.select().from(profiles).where(eq(profiles.id, offer.authorId)))[0]


    return (
        <OfferPage offer={offer} seller={seller} />
    )
}