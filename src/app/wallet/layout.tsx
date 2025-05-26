import { ReactNode } from "react"
import { CardHeader } from "../components/header"
import Navigation from "../components/navigation"

type Props = {
    children: ReactNode
}

const WalletPageLayout = ({ children }: Props) => {
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

export default WalletPageLayout;