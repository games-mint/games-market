import { CardHeader } from "@/app/components/header"
import Navigation from "@/app/components/navigation"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ReactNode } from "react"


type Props = {
    children: ReactNode
}

const EditPageLayout = async ({ children }: Props) => {

    const supabase = await createClient()

    const { data } = await supabase.auth.getUser()

    if (data.user === null) {
        return (
            <>
                <CardHeader />
                <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">
                    <section className="container px-4 mx-auto pt-10 text-center">
                        <h3 className="text-xl lg:text-2xl mb-8">In order to create and edit offers you need to sign in</h3>
                        <Link href="/login" className="relative whitespace-nowrap px-6 py-3 text-base font-medium bg-violet-600 text-white rounded-full">
                            Sign in
                        </Link>
                    </section>
                </main>
                <Navigation />
            </>
        )
    }

    return (
        <>
            <CardHeader />
            <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">
                {children}
            </main>
            <Navigation />
        </>
    )
}

export default EditPageLayout;