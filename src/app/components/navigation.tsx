'use client';
import Link from "next/link"
import Icon from "./common/icon"
import { Icons } from "./common/icon/types"
import Image from "next/image"
import Button from "./common/button"
import { usePathname } from "next/navigation";


const Navigation = ({ authorised = false }: { authorised?: boolean }) => {
    const pathname = usePathname();

    const activeGames = pathname.match('/games') !== null;
    const activeApps = pathname.match('/apps') !== null;


    return (
        <nav className="fixed left-0 right-0 bottom-0 w-full bg-slate-50 z-10 lg:bottom-auto lg:top-0 lg:h-screen lg:w-[320px]">
            <div className="max-lg:px-4 max-lg:container max-lg:mx-auto lg:h-full ">
                <div className="flex items-center justify-between py-5 max-w-[500px] mx-auto lg:flex-col lg:p-8 lg:h-full">

                    <div className="hidden lg:block w-full mb-8">
                        <Link href="/">
                            <Image width={152} height={56} src="/logo.svg" alt="logo" />
                        </Link>
                    </div>

                    <div className={`${authorised ? "w-[50%]" : "w-[60%]"} lg:flex flex-col gap-6 lg:order-3 lg:w-full`}>
                        <span className="hidden lg:block text-sm font-medium uppercase tracking-[0.15rem] px-3">NAVIGATION</span>
                        <div className="flex items-center justify-between lg:flex-col lg:gap-6">
                            <NavigationItem title="Explore" icon="category" link="/" />
                            <NavigationItem active={activeGames} title="Games" icon="game" link="/games" />
                            <NavigationItem active={activeApps} title="Apps" icon="layer" link="/apps" />
                        </div>
                    </div>

                    {/* <div className="hidden lg:flex flex-col gap-6 lg:order-3 lg:w-full">
                        <span className="block text-sm font-medium uppercase">PROFILE</span>
                        <div className="flex flex-col gap-6">
                            <NavigationItem title="Explore" icon="category" link="/" />
                            <NavigationItem title="Apps" icon="layer" link="/apps" />
                        </div>
                    </div> */}

                    <div className={`${authorised ? "w-[25%]" : "w-[40%]"} lg:order-2 lg:w-full lg:mb-8`}>
                        <Link href="/edit/new" className="w-fit mx-auto flex items-center justify-center px-6 py-3 flex-shrink-0 bg-violet-100 text-violet-800 rounded-full lg:w-full lg:justify-between">
                            <span className="hidden lg:block ">Sell</span>
                            <Icon className="w-6 h-6 " icon="add-square" />
                        </Link>
                    </div>

                    {authorised
                        ? <div className="w-[30%] lg:order-5 lg:w-full lg:mt-auto">
                            <Link href="/wallet" className="w-fit mx-auto flex items-center justify-center px-6 py-3 flex-shrink-0 bg-gradient-to-b from-violet-600 to-fuchsia-500 text-white rounded-full lg:flex-col lg:gap-4 lg:rounded-2xl lg:w-full lg:p-6" >
                                <span className="hidden lg:block text-base font-medium">Your balance</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-base font-medium lg:text-4xl" >324</span>
                                    <Icon className="w-6 h-6 " icon="flash" />
                                </div>
                                <Button className="max-lg:hidden  w-full" type="alt" icon="add-square" >
                                    Top up balance
                                </Button>
                            </Link>
                        </div>
                        : <div className="hidden lg:block order-5 w-full mt-auto" />
                    }
                </div>
            </div>
        </nav>
    )
}


const NavigationItem = ({ active, title, link, icon }: { active?: boolean, title: string, icon: Icons, link: string }) => (
    <Link
        href={link}
        className={`flex items-center justify-center p-3 ${active ? "text-violet-800 font-bold hover:bg-violet-100" : "hover:bg-slate-100 text-slate-700"}  rounded-full lg:gap-4 lg:w-full lg:justify-start lg:py-2 lg:rounded-xl`}
    >
        <Icon className="w-6 h-6 " icon={icon} />
        <span className="hidden lg:block text-base">{title}</span>
    </Link>
)

export default Navigation;