import { CardHeader } from "@/app/components/header"
import Navigation from "@/app/components/navigation"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const DealPageLayout = ({ children }: Props) => {
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

export default DealPageLayout;