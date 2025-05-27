import { ReactNode } from "react"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


type Props = {
    children: ReactNode
}

const LogoutPageLayout = async ({ children }: Props) => {

    const supabase = await createClient()

    const { data } = await supabase.auth.getUser()

    if (data.user === null) {
        redirect('/')
    }

    return children;
}

export default LogoutPageLayout;