'use client'
import Carousel, { CarouselElement, CarouselRef } from '@/app/components/carousel';
import Icon from '@/app/components/icons';
import Text from '@/app/components/text';
import Title from '@/app/components/title';
import Image from 'next/image';
import { useRef } from 'react';

const SellerPage = () => {
    const carouselRef = useRef<CarouselRef>(null);

    console.log(carouselRef.current);


    const nextEl = () => {
        if (carouselRef.current === null)
            return;

        carouselRef.current.next();
    }

    const prevEl = () => {
        if (carouselRef.current === null)
            return;

        carouselRef.current.prev();
    }

    return (
        <>
            <section className="container px-4 mx-auto ">
                <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-clip">
                        <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Title className='text-slate-700' size='h3'>
                            @Green_Dragon_3
                        </Title>
                        <Text className='text-slate-500'>
                            from July 2025
                        </Text>
                    </div>
                </div>
            </section>

            <section className='container px-4 mx-auto mt-8'>
                <div className='flex flex-col gap-4 p-4 bg-slate-100 rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <Text className='font-bold'>Reviews</Text>
                        <Text className='text-slate-700'>See reviews</Text>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Icon className='w-6 h-6 text-amber-500' icon="star" />
                        <Title size="h1" className='text-slate-700'>4.8</Title>
                        <Text size='sm' className='font-medium'>500 reviews</Text>
                    </div>
                    <button className='flex items-center gap-4 px-6 py-3 text-white bg-violet-600 rounded-full w-fit'>
                        <span className='font-medium'>Leave a review</span>
                        <Icon className='w-6 h-6' icon='like-tag' />
                    </button>
                </div>
            </section>

            <section className='container px-4 mx-auto mt-8'>
                <div className='bg-slate-100 p-4 flex flex-col gap-8'>
                    <div className='flex items-center justify-between'>
                        <Text className='font-bold'>Sales History</Text>
                        <Text className='text-slate-700'>See all</Text>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                            <Text className='w-[70%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                            <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Text className='w-[70%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                            <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Text className='w-[70%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                            <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container px-4 mx-auto mt-8'>
                <div className='bg-slate-100 p-4 flex flex-col gap-8 rounded-xl'>
                    <div className="flex justify-between items-center">
                        <Text className="font-medium">
                            Author choice
                        </Text>
                        <div className="flex items-center gap-2">
                            <button onClick={prevEl} className="px-3 py-2 bg-white rounded-full flex items-center justify-center text-slate-700 disabled:text-slate-200">
                                <Icon className="w-6 h-6" icon="arrow-left" />
                            </button>
                            <button onClick={nextEl} className="px-3 py-2 bg-white rounded-full flex items-center justify-center text-slate-700 disabled:text-slate-200">
                                <Icon className="w-6 h-6" icon="arrow-right" />
                            </button>
                        </div>
                    </div>
                    <Carousel ref={carouselRef} gap={24}>
                        <CarouselElement>
                            <div className="w-[220px] flex flex-col gap-4 rounded-2xl px-2 py-3 bg-white">
                                <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                                    <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                                </div>
                                <Text className="font-medium">Dota 2 Account with skins</Text>
                                <Text size="sm" className="text-slate-600">
                                    Instantly top up your in-game currency and boost your gameplay without delay!
                                </Text>
                                <div className="flex gap-2 items-center">
                                    <div className="relative w-6 h-6 rounded-full overflow-clip flex-shrink-0">
                                        <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                                    </div>
                                    <Text size="sm" className="text-slate-500">@Green_Dragon_3</Text>
                                </div>
                                <div className=" justify-end flex items-center gap-2 text-violet-600">
                                    <Text className="font-medium" >24</Text>
                                    <Icon className="w-4 h-4" icon="flash" />
                                </div>
                            </div>
                        </CarouselElement>
                        <CarouselElement>
                            <div className="w-[220px] flex flex-col gap-4 rounded-2xl px-2 py-3 bg-white">
                                <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                                    <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                                </div>
                                <Text className="font-medium">Dota 2 Account with skins</Text>
                                <Text size="sm" className="text-slate-600">
                                    Instantly top up your in-game currency and boost your gameplay without delay!
                                </Text>
                                <div className="flex gap-2 items-center">
                                    <div className="relative w-6 h-6 rounded-full overflow-clip">
                                        <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                                    </div>
                                    <Text size="sm" className="text-slate-500">@Green_Dragon_3</Text>
                                </div>
                            </div>
                        </CarouselElement>
                        <CarouselElement>
                            <div className="w-[220px] flex flex-col gap-4 rounded-2xl px-2 py-3 bg-slate-100">
                                <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                                    <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                                </div>
                                <Text className="font-medium">Dota 2 Account with skins</Text>
                                <Text size="sm" className="text-slate-600">
                                    Instantly top up your in-game currency and boost your gameplay without delay!
                                </Text>
                                <div className="flex gap-2 items-center">
                                    <div className="relative w-6 h-6 rounded-full overflow-clip">
                                        <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                                    </div>
                                    <Text size="sm" className="text-slate-500">@Green_Dragon_3</Text>
                                </div>
                            </div>
                        </CarouselElement>
                        <CarouselElement>
                            <div className="w-[220px] flex flex-col gap-4 rounded-2xl px-2 py-3 bg-slate-100">
                                <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                                    <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                                </div>
                                <Text className="font-medium">Dota 2 Account with skins</Text>
                                <Text size="sm" className="text-slate-600">
                                    Instantly top up your in-game currency and boost your gameplay without delay!
                                </Text>
                                <div className="flex gap-2 items-center">
                                    <div className="relative w-6 h-6 rounded-full overflow-clip">
                                        <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                                    </div>
                                    <Text size="sm" className="text-slate-500">@Green_Dragon_3</Text>
                                </div>
                            </div>
                        </CarouselElement>
                    </Carousel>
                </div>
            </section>

            <section className='container px-4 mx-auto mt-8'>
                <div className="flex flex-col gap-6">
                    <Title className="font-medium" size="h3" >
                        Green_Dragon_3’s offers
                    </Title>
                    <div className="w-full overflow-x-scroll no-scrollbar">
                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 bg-slate-200 flex items-center gap-4 text-slate-700 rounded-full flex-shrink-0">
                                <Text size="xs">
                                    Sort by
                                </Text>
                                <Icon className="w-4 h-4" icon="arrow-circle-down" />
                            </button>

                            <button className="px-4 py-2 bg-slate-200 flex items-center gap-4 text-slate-700 rounded-full flex-shrink-0">
                                <Text size="xs">
                                    Filters
                                </Text>
                                <Icon className="w-4 h-4" icon="filter-search" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] gap-2 mb-32">
                        <div className="flex flex-col gap-4 rounded-2xl px-2 py-3 bg-slate-100">
                            <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                            <Text className="font-medium">Dota 2 Account with skins</Text>
                            <Text size="sm" className="text-slate-600">
                                Instantly top up your in-game currency and boost your gameplay without delay!
                            </Text>
                            <div className="flex gap-2 items-center">
                                <div className="relative w-6 h-6 rounded-full overflow-clip">
                                    <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                                </div>
                                <Text size="sm" className="text-slate-500">@Green_Dragon_3</Text>
                            </div>
                            <div className=" justify-end flex items-center gap-2 text-violet-600">
                                <Text className="font-medium" >24</Text>
                                <Icon className="w-4 h-4" icon="flash" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-2xl px-2 py-3 bg-slate-100">
                            <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                            <Text className="font-medium">Dota 2 Account with skins</Text>
                            <Text size="sm" className="text-slate-600">
                                Instantly top up your in-game currency and boost your gameplay without delay!
                            </Text>
                            <div className="flex gap-2 items-center">
                                <div className="relative w-6 h-6 rounded-full overflow-clip">
                                    <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                                </div>
                                <Text size="sm" className="text-slate-500">@Green_Dragon_3</Text>
                            </div>
                            <div className=" justify-end flex items-center gap-2 text-violet-600">
                                <Text className="font-medium" >24</Text>
                                <Icon className="w-4 h-4" icon="flash" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SellerPage;