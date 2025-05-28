'use server'

import { createClient } from "@/utils/supabase/server";
import { ApiReturnT } from "./types"
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


type UpdateProfileData = {
    avatarUrl: string | null,
    bio: string | null
}

export const updateProfile = async ({ avatarUrl, bio }: UpdateProfileData): Promise<ApiReturnT<null, null>> => {
    const supabase = await createClient();

    const { data: userData, error: supabaseError } = await supabase.auth.getUser();

    if (supabaseError || userData.user === null) {
        console.error(supabaseError);
        return {
            error: { code: 'unauthorized' },
            data: null,
        }
    }

    await db.update(profiles).set({ avatarUrl, bio })

    return {
        error: null,
        data: null,
    }
}

export const removeUser = async (): Promise<ApiReturnT<null, null>> => {
    const supabase = await createClient();

    const { data: userData, error: supabaseError } = await supabase.auth.getUser();

    if (supabaseError || userData.user === null) {
        console.error(supabaseError);
        return {
            error: { code: 'unauthorized' },
            data: null,
        }
    }

    const { error } = await supabase.auth.admin.deleteUser(userData.user.id)

    if (error) {
        console.log(error);
        return {
            error: { code: 'server_error' },
            data: null,
        }
    }

    revalidatePath('/', 'layout')
    redirect('/');
}