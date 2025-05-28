'use server'

import { createClient } from "@/utils/supabase/server"
import { ApiReturnT } from "../types";


type ReturnType = {
    path: string
}


type ErrorCodes = "size_exceed";

export const uploadImage = async (image: Blob, name: string): Promise<
    ApiReturnT<ReturnType, ErrorCodes>
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

    const [type, extenstion] = image.type.split('/');
    const maxfileSizeMiB = 1 * 1024 * 1024; // 1MiB
    if (type !== "image" || !["jpeg", "png"].includes(extenstion) || image.size > maxfileSizeMiB)
        return {
            error: { code: 'size_exceed' },
            data: null
        }
    
    const pathWithFilename = `${supabaseData.user.id}/${name}`;

    const { data, error } = await supabase.storage.from('user-images').upload(pathWithFilename, image);
    console.log({data, error, pathWithFilename})
    if (error) {
        console.error(error);
        return {
            error: { code: 'server_error' },
            data: null
        }
    }

    if (data) {
        const { data: { publicUrl } } = supabase.storage.from('user-images').getPublicUrl(data.path);
        return {
            data: { path: publicUrl },
            error: null,
        }
    }

    return {
        data: null,
        error: null
    }
}