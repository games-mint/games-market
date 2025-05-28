'use server'
import { createClient } from "@/utils/supabase/server";
import { ApiReturnT } from "./types";
import { db } from "@/db";
import { deals, posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const purchaseOffer = async (id: number): Promise<ApiReturnT<null>> => {

    const supabase = await createClient();

    const { data: supabaseData, error: supabaseError } = await supabase.auth.getUser();

    if (supabaseError || supabaseData.user === null) {
        console.error(supabaseError);
        return {
            error: { code: 'unauthorized' },
            data: null,
        }
    }


    const post = (await db.select().from(posts).where(eq(posts.id, id)))[0];

    await db.insert(deals).values({ buyerId: supabaseData.user.id, sellerId: post.authorId, postId: post.id, status: 'started' })

    redirect('/profile');
}