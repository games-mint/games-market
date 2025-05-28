'use server'

import { db } from "@/db";
import { posts } from "@/db/schema";
import { ApiReturnT, CreateOrUpdatePostReturnType, PostData, PostDataWithoutId } from "./types";
import { createOrUpdateOfferSchema } from "../edit/[id]/scheme";
import { createClient } from "@/utils/supabase/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";


export const createOrUpdatePost = async (data: PostData): Promise<CreateOrUpdatePostReturnType<PostDataWithoutId>> => {

    const { error: validationError } = await createOrUpdateOfferSchema.safeParseAsync(data);
    if (validationError)
        return {
            validationError: validationError.errors.map(el => ({ "code": el.code, field: el.path[0] as keyof PostDataWithoutId })),
            serverError: null,
        }

    const { id, description, imageUrl, price, productId, title } = data;
    const isNew = id === undefined;
    const supabase = await createClient()

    const { data: userData } = await supabase.auth.getUser()

    if (userData.user === null)
        return {
            serverError: {
                code: "not_authenticated"
            },
            validationError: null
        }


    if (isNew) {
        const result = await db.insert(posts).values({ description, imageUrl, price, productId, title, authorId: userData.user.id }).returning({ id: posts.id });

        redirect(`/offer/${result[0].id}`)
    }

    const author = (await db.select({ authorId: posts.authorId }).from(posts).where(eq(posts.id, id)))[0];
    if (author.authorId !== userData.user.id) {
        return {
            serverError: {
                code: "not_authenticated"
            },
            validationError: null
        }

    }

    const result = await db.update(posts).set({ description, imageUrl, price, productId, title }).where(eq(posts.id, id)).returning({ id: posts.id });
    redirect(`/offer/${result[0].id}`)
}






export const removePost = async (id: number): Promise<ApiReturnT<null, null>> => {
    const supabase = await createClient();

    const { data: userData, error: supabaseError } = await supabase.auth.getUser();

    if (supabaseError || userData.user === null) {
        console.error(supabaseError);
        return {
            error: { code: 'unauthorized' },
            data: null,
        }
    }

    const author = (await db.select({ authorId: posts.authorId }).from(posts).where(eq(posts.id, id)))[0];
    if (author.authorId !== userData.user.id) {
        return {
            error: {
                code: "unauthorized"
            },
            data: null,
        }

    }

    await db.delete(posts).where(eq(posts.id, id))
    redirect('/');

}