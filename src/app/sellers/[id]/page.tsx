'use server'
import { db } from '@/db';
import { posts, profiles, reviews } from '@/db/schema';
import { eq } from 'drizzle-orm';
import SellerPage from './sellerPage';
import { createClient } from '@/utils/supabase/server';


export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const supabase = await createClient()

    const { data: userData } = await supabase.auth.getUser()

    const { id } = await params;

    const users = await db.select().from(profiles).where(eq(profiles.id, id));
    const seller = users[0];
    const offers = await db.select().from(posts).where(eq(posts.authorId, id));
    const reviewsData = (await db.select().from(reviews).where(eq(reviews.receiverId, id)).leftJoin(profiles, eq(profiles.id, reviews.authorId))).map(data => ({ review: data.reviews!, author: data.profiles! }))

    return (
        <SellerPage offers={offers}
            reviews={reviewsData}
            seller={seller}
            userId={userData.user?.id || null}
        />
    )
}