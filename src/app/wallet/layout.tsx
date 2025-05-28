import { ReactNode } from "react"
import { CardHeader } from "../components/header"
import Navigation from "../components/navigation"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

type Props = {
    children: ReactNode
}

const WalletPageLayout = async ({ children }: Props) => {
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

export default WalletPageLayout;