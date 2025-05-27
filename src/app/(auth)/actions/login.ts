'use server'

import { createClient } from "@/utils/supabase/server";
import loginSchema from "../login/schema";
import { LoginData, LoginReturnType, ServerLoginErrorCodeType } from "./types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



async function login(data: LoginData): Promise<LoginReturnType<LoginData>> {

    const { error: validationError } = loginSchema.safeParse(data);

    if (validationError)
        return {
            validationError: validationError.errors.map(el => ({ "code": el.code, field: el.path[0] as keyof LoginData })),
            serverError: null,
        }


    const supabase = await createClient()
    const { error: supabaseError } = await supabase.auth.signInWithPassword(data)


    if (supabaseError) {
        console.log({ supabaseError });
        let errorCode: ServerLoginErrorCodeType = "server_error";

        switch (supabaseError.code) {
            case "email_address_invalid":
            case "email_provider_disabled":
            case "email_address_not_authorized":
                errorCode = "email_address_invalid"
                break;
            case 'email_not_confirmed':
                errorCode = 'email_not_confirmed';
                break;
            case "invalid_credentials":
                errorCode = "invalid_credentials";
                break;
            default:
                errorCode = "server_error";
                break;
        }

        return {
            serverError: {
                code: errorCode
            },
            validationError: null
        }
    }


    revalidatePath('/', 'layout')
    redirect('/')
}

export default login