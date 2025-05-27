'use server'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function signInWithGoogle() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/auth/callback?next=/onboarding'
        }
    })

    if (error) {
        console.log(error);
        redirect('/error')
    }

    if (data.url)
        redirect(data.url);
}

export default signInWithGoogle;