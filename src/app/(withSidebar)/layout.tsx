import { ReactNode } from "react"
import Navigation from "@/app/components/navigation"
import Header from "@/app/components/header"

type Props = {
    children: ReactNode
}

const LayoutWithSidebar = ({ children }: Props) => {
    return (
        <>
            <Header/>
            <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">
                {children}
            </main>
           <Navigation/>
        </>
    )
}

export default LayoutWithSidebar;