import { ReactNode } from "react"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


type Props = {
    children: ReactNode
}

const SingUpPageLayout = async ({ children }: Props) => {

    const supabase = await createClient()

    const { data } = await supabase.auth.getUser()

    if (data.user) {
        redirect('/')
    }

    return children;
}

export default SingUpPageLayout;