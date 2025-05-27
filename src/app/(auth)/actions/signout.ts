'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signOutLocal() {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut({ scope: "local" })

    if (error) {
        console.log(error);
        redirect('/error')
    }

    redirect('/');
}