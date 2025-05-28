import { CardHeader } from "@/app/components/header"
import Navigation from "@/app/components/navigation"
import { createClient } from "@/utils/supabase/server"

import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const OfferPageLayout = async ({ children }: Props) => {
    const supabase = await createClient()

    const { data } = await supabase.auth.getUser()

    const authorised = data.user !== null;

    return (
        <>
            <CardHeader />
            <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">
                {children}
            </main>
            <Navigation authorised={authorised} />
        </>
    )
}

export default OfferPageLayout;