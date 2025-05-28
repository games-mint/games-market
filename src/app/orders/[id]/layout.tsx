import { CardHeader } from "@/app/components/header"
import Navigation from "@/app/components/navigation"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const DealPageLayout = async ({ children }: Props) => {
    const supabase = await createClient()

    const { data } = await supabase.auth.getUser()

    if (data.user === null) {
        redirect('/');
    }

    return (
        <>
            <CardHeader />
            <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">
                {children}
            </main>
            <Navigation authorised />
        </>
    )
}

export default DealPageLayout;