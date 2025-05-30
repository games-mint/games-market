'use server'

import { db } from "@/db"
import { profiles, reviews } from "@/db/schema"
import { ApiReturnT } from "./types"
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"

type PublishReviewData = {
    authorId: string,
    receiverId: string,
    rating: number,
    message: string
}

export const publishReviw = async (data: PublishReviewData): Promise<ApiReturnT<null, null>> => {

    await db.insert(reviews).values(data)

    const ratings = await db.select({ rating: reviews.rating }).from(reviews).where(eq(reviews.receiverId, data.receiverId));

    const sum = ratings.map(el => el.rating).reduce((prev, next) => prev + next);
    let newRating = sum / ratings.length;
    newRating  =Math.round(newRating * 100) / 100;

    await db.update(profiles).set({ rating: newRating }).where(eq(profiles.id, data.receiverId));

    revalidatePath(`/seller/${data.receiverId}`, 'layout');

    return {
        data: null,
        error: null
    }

}