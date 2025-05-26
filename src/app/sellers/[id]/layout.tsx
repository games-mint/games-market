import Icon from "@/app/components/icons"
import Text from "@/app/components/text"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SellerPageLayout = ({ children }: Props) => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white/60 container px-4 mx-auto backdrop-blur-md z-20">
                <div className="flex justify-start items-center py-3">
                    <button className="flex items-center gap-4 bg-slate-200 text-slate-700 px-6 py-2 rounded-full">
                        <Icon className="w-6 h-6" icon="arrow-left" />
                        <Text className="whitespace-nowrap">
                            Go back
                        </Text>
                    </button>
                </div>
            </header>
            <main className="mt-[72px]">
                {children}
            </main>
            <nav className="fixed left-0 bottom-0 container px-4 mx-auto bg-slate-50 z-10">
                <div className="flex items-center justify-between py-5">
                    <Link className="flex items-center justify-center p-3 hover:bg-slate-100 text-slate-700 rounded-full" href="/">
                        <Icon className="w-6 h-6 " icon="category" />
                    </Link>
                    <Link className="flex items-center justify-center p-3 hover:bg-slate-100 text-slate-700 rounded-full" href="/">
                        <Icon className="w-6 h-6 " icon="game" />
                    </Link>
                    <Link className="flex items-center justify-center p-3 hover:bg-slate-100 text-slate-700 rounded-full" href="/">
                        <Icon className="w-6 h-6 " icon="layer" />
                    </Link>

                    <Link className="flex items-center justify-center px-6 py-3 flex-shrink-0 bg-violet-100 text-violet-800 rounded-full" href="/">
                        <Icon className="w-6 h-6 " icon="add-square" />
                    </Link>
                    <Link className="flex items-center justify-center px-6 py-3 flex-shrink-0 bg-gradient-to-b from-violet-600 to-fuchsia-500 text-white rounded-full" href="/">
                        <span className="text-base font-medium" >324</span>
                        <Icon className="w-6 h-6 " icon="flash" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default SellerPageLayout;