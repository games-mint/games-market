'use client'
import { useRef } from "react";
import Carousel, { CarouselElement, CarouselRef } from "../components/carousel";
import Icon from "../components/icons";
import Title from "../components/title";
import Image from "next/image";
import Text from "../components/text";
import Link from "next/link";

const MainPage = () => {
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
            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <Title className="font-medium" size="h3" >
                            Featured offers
                        </Title>
                        <div className="flex items-center gap-2">
                            <button onClick={prevEl} className="px-3 py-2 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 disabled:text-slate-50">
                                <Icon className="w-6 h-6" icon="arrow-left" />
                            </button>
                            <button onClick={nextEl} className="px-3 py-2 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 disabled:text-slate-50">
                                <Icon className="w-6 h-6" icon="arrow-right" />
                            </button>
                        </div>
                    </div>

                    <Carousel ref={carouselRef} gap={24}>
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

            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-6">
                    <Title className="font-medium" size="h3" >
                        Popular games
                    </Title>

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>
                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>

                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>
                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>

                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>

                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>
                    </div>

                </div>
            </section>

            <footer className="flex flex-col gap-8 container px-4 mx-auto py-8 mb-20">
                <nav className="flex flex-col gap-8">
                    <Link href="/" className="text-slate-700 font-medium text-base">Terms of Service</Link>
                    <Link href="/" className="text-slate-700 font-medium text-base">Privacy Policy</Link>
                    <Link href="/" className="text-slate-700 font-medium text-base">Contacts</Link>
                    <Link href="/" className="text-slate-700 font-medium text-base">FAQ</Link>
                </nav>
                <Text className="text-slate-700">© 2025 Digital Trading/Global Digital Technology. All rights reserved.</Text>
            </footer>
        </>
    )
}

export default MainPage;