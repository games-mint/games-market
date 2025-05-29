import { ReactNode } from "react"
import Navigation from "@/app/components/navigation"
import Header from "@/app/components/header"
import { createClient } from "@/utils/supabase/server"

type Props = {
    children: ReactNode
}

const LayoutWithSidebar = async ({ children }: Props) => {
    const supabase = await createClient()

    const { data } = await supabase.auth.getUser()

    const authorised = data.user !== null;

    return (
        <>
            <Header authorised={authorised} />
            <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">
                {children}
            </main>
            <Navigation authorised={authorised} />
        </>
    )
}

export default LayoutWithSidebar;