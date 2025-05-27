'use server'

import { db } from "@/db";
import { profiles } from "@/db/schema";
import { count, eq } from "drizzle-orm";
import { ServerSignUpErrorCodeType, SignUpData, SignUpReturnType } from "./types";
import { signUpSchema } from "../signup/schema";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function signup(data: SignUpData): Promise<SignUpReturnType<SignUpData>> {

    const { error: validationError } = await signUpSchema.safeParseAsync(data);

    if (validationError)
        return {
            validationError: validationError.errors.map(el => ({ "code": el.code, field: el.path[0] as keyof SignUpData })),
            serverError: null,
        }


    const supabase = await createClient()
    const { error: supabaseError, data: supabaseData } = await supabase.auth.signUp(data)
    if (supabaseError) {
        console.log(supabaseError);
        let errorCode: ServerSignUpErrorCodeType = "server_error";

        switch (supabaseError.code) {
            case "email_address_invalid":
            case "email_provider_disabled":
            case "email_address_not_authorized":
                errorCode = "email_address_invalid"
                break;
            case "email_exists":
            case "user_already_exists":
                errorCode = "user_exists";
                break;
            case "weak_password":
                errorCode = "weak_password";
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

    if (supabaseData.user !== null) {

    }

    if (supabaseData.user !== null) {
        if (supabaseData.user.role !== "authenticated") {
            return {
                serverError: {
                    code: "user_exists"
                },
                validationError: null
            }
        }

        const existingUser = await db.select({ count: count() }).from(profiles).where(eq(profiles.id, supabaseData.user.id));
        if (existingUser[0].count)
            return {
                serverError: {
                    code: "user_exists"
                },
                validationError: null
            }

        await db.insert(profiles).values({ id: supabaseData.user.id, name: data.username });
    }

    if (!supabaseData.user?.user_metadata.email_verified) {
        redirect('/confirm-email')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}
