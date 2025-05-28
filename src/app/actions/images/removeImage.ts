'use server'

import { createClient } from "@/utils/supabase/server"
import { ApiReturnT } from "../types";



type ErrorCodes = "size_exceed";

export const removeImage = async (imageUrl: string): Promise<
    ApiReturnT<null, ErrorCodes>
> => {
    const supabase = await createClient();

    const { data: supabaseData, error: supabaseError } = await supabase.auth.getUser();

    if (supabaseError || supabaseData.user === null) {
        console.error(supabaseError);
        return {
            error: { code: 'unauthorized' },
            data: null,
        }
    }

    const { error } = await supabase.storage.from('avatar-images').remove([imageUrl]);
    if (error) {
        console.error(error);
        return {
            error: { code: 'server_error' },
            data: null
        }
    }

    return {
        data: null,
        error: null
    }
}