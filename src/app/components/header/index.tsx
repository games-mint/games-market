'use client';
import Icon from '../common/icon';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import { Product } from '@/common/types';
import { searchProducts } from '../../actions/products';
import HeaderAvatar from './components/avatar';


const Header = ({ authorised }: { authorised: boolean }) => {
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);
    const [searchString, setSearchString] = useState('');
    const [, startTransition] = useTransition()


    useEffect(() => {
        if (searchString.length !== 0)
            startTransition(async () => {
                const results = await searchProducts(searchString);
                setFoundProducts(results)
            })
        else setFoundProducts([]);
    }, [searchString])


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    }

    const onClick = () => {
        setSearchString("")
    }

    const showSearchResults = searchString.length !== 0;

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-md z-20 lg:right-0 lg:w-[calc(100vw_-_320px)] lg:ml-auto">
            <div className='container px-4 mx-auto '>
                <div className="flex justify-between items-center gap-4 py-3">
                    <div className='relative w-full max-w-[600px]'>
                        <input value={searchString} onChange={onChange} className="w-full px-6 py-3 rounded-full text-base placeholder:text-slate-500 text-slate-900 bg-slate-100 outline-none" placeholder="Search games or apps" />
                        {
                            showSearchResults
                                ? (
                                    <div className='absolute w-full rounded-2xl left-0 top-[54px] p-4 bg-white shadow-md flex flex-col gap-2'>
                                        {foundProducts.map(el => (
                                            <Link key={el.id} onClick={onClick} href={`/offers/${el.id}`} className='px-4 py-3 rounded-xl cursor-pointer hover:bg-slate-50'>{el.name}</Link>
                                        ))}
                                    </div>
                                ) : null
                        }
                    </div>
                    {authorised
                        ? <HeaderAvatar />
                        : <Link href="/login" className="relative whitespace-nowrap px-6 py-3 text-base font-medium bg-violet-600 text-white rounded-full">
                            Sign in
                        </Link>
                    }


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



export const ProfileHeader = ({ openModal }: { openModal: () => void }) => {
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
                    <button onClick={openModal} className="px-6 py-2 bg-slate-200 flex items-center justify-center rounded-full">
                        <Icon className="w-6 h-6" icon="settings" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;