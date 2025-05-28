'use server'
import { createClient } from '@/utils/supabase/server';
import { db } from '@/db';
import { deals, posts, profiles } from '@/db/schema';
import { eq } from 'drizzle-orm';
import ProfilePage from './profilePage';

export default async function () {
    const supabase = await createClient()

    const { data } = await supabase.auth.getUser()

    if (data.user === null)
        return null;

    const userData = (await db.select().from(profiles).where(eq(profiles.id, data.user.id)))[0];

    const offers = await db.select().from(posts).where(eq(posts.authorId, userData.id))

    const dealsDataFull = await db.select().from(deals).leftJoin(posts, eq(posts.id, deals.postId)).leftJoin(profiles, eq(profiles.id, deals.sellerId)).where(eq(deals.sellerId, userData.id));

    const dealsData = dealsDataFull.map(deal => ({
        deal: deal.deals,
        offer: deal.posts!,
        seller: deal.profiles!
    }))


    const ordersDataFull = await db.select().from(deals).leftJoin(posts, eq(posts.id, deals.postId)).leftJoin(profiles, eq(profiles.id, deals.sellerId)).where(eq(deals.buyerId, userData.id));

    const ordersData = ordersDataFull.map(deal => ({
        deal: deal.deals,
        offer: deal.posts!,
        seller: deal.profiles!
    }))


    return (
        <ProfilePage offers={offers} userData={userData} deals={dealsData} orders={ordersData} />
    )
}