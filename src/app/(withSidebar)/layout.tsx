import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import Icon from "../components/icons"

type Props = {
    children: ReactNode
}

const LayoutWithSidebar = ({ children }: Props) => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white/60 container px-4 mx-auto backdrop-blur-md z-20">
                <div className="flex justify-between items-center py-3">
                    <input className="w-full px-6 py-3 rounded-full text-base placeholder:text-slate-500 text-slate-900 bg-slate-100 outline-none" placeholder="Search games or apps" />
                    <button className="w-12 h-12 bg-slate-50 rounded-full flex-shrink-0 flex items-center justify-center">
                        <div className="relative w-8 h-8 rounded-full overflow-clip">
                            <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                        </div>
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

export default LayoutWithSidebar;