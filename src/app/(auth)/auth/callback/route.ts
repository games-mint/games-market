import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'
import { db } from '@/db'
import { profiles } from '@/db/schema'
import { count, eq } from 'drizzle-orm'


export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = await createClient()
        const { error, data: supabaseData } = await supabase.auth.exchangeCodeForSession(code);

        if (error)
            console.log(error);
        if (!error) {
            if (supabaseData) {
                const existingUser = await db.select({ count: count() }).from(profiles).where(eq(profiles.id, supabaseData.user.id));
                if (!existingUser[0].count) {
                    // new user, need to create profile for it
                    const username = supabaseData.user.user_metadata.user_name as string || supabaseData.user.user_metadata.name || supabaseData.user.user_metadata.full_name;
                    const results = await db.insert(profiles).values({ id: supabaseData.user.id, name: username });
                    console.log("CREATE NEW USER", results);
                }

            }
            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'
            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }
    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth-code-error`)
}

