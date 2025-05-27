'use client';
import Image from 'next/image';
import Icon from './common/icon';
import { useRouter } from 'next/navigation'
import Link from 'next/link';


const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-md z-20 lg:right-0 lg:w-[calc(100vw_-_320px)] lg:ml-auto">
            <div className='container px-4 mx-auto '>
                <div className="flex justify-between items-center gap-4 py-3">
                    <input className="w-full px-6 py-3 rounded-full text-base max-w-[600px] placeholder:text-slate-500 text-slate-900 bg-slate-100 outline-none" placeholder="Search games or apps" />
                    <button className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center">
                        <Link href="/profile" className="relative w-8 h-8 rounded-full overflow-clip">
                            <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}


export const NonAuthUserHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-md z-20 lg:right-0 lg:w-[calc(100vw_-_320px)] lg:ml-auto">
            <div className='container px-4 mx-auto '>
                <div className="flex justify-between items-center gap-4 py-3">
                    <input className="w-full px-6 py-3 rounded-full text-base max-w-[600px] placeholder:text-slate-500 text-slate-900 bg-slate-100 outline-none" placeholder="Search games or apps" />
                    <Link href="/login" className="relative whitespace-nowrap px-6 py-3 text-base font-medium bg-violet-600 text-white rounded-full">
                        Sign in
                    </Link>
                </div>
            </div>
        </header>
    )
}



export const CardHeader = () => {
    const router = useRouter()

    const goBack = () => {
        router.back();
    }

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-md z-20 lg:right-0 lg:w-[calc(100vw_-_320px)] lg:ml-auto">
            <div className='container px-4 mx-auto '>
                <div className="flex justify-between items-center gap-4 py-3">
                    <button onClick={goBack} className="flex items-center gap-4 bg-slate-200 text-slate-700 px-6 py-2 rounded-full">
                        <Icon className="w-6 h-6" icon="arrow-left" />
                        <span className="whitespace-nowrap">
                            Go back
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}



export const ProfileHeader = () => {
    const router = useRouter()

    const goBack = () => {
        router.back();
    }

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-md z-20 lg:right-0 lg:w-[calc(100vw_-_320px)] lg:ml-auto">
            <div className='container px-4 mx-auto '>
                <div className="flex justify-between items-center gap-4 py-3">
                    <button onClick={goBack} className="flex items-center gap-4 bg-slate-200 text-slate-700 px-6 py-2 rounded-full">
                        <Icon className="w-6 h-6" icon="arrow-left" />
                        <span className="whitespace-nowrap">
                            Go back
                        </span>
                    </button>
                    <button className="px-6 py-2 bg-slate-200 flex items-center justify-center rounded-full">
                        <Icon className="w-6 h-6" icon="settings" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;