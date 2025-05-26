'use client'
import Carousel, { CarouselElement, CarouselRef } from "@/app/components/carousel";
import Icon from "@/app/components/icons";
import Text from "@/app/components/text";
import Title from "@/app/components/title";
import Image from "next/image"
import { useRef } from "react";

const OfferPage = () => {
    const carouselRef = useRef<CarouselRef>(null);



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

            <div className="w-full aspect-[3/2] relative">
                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnail" />
            </div>
            <section className="container px-4 mx-auto">
                <div className="flex flex-col gap-8">
                    <Title className="font-medium" size="h3" >Dota 2 Account with skins</Title>
                    <Text size="sm">
                        Easily top up your in-game currency with our fast and secure top-up service.
                        Whether you're looking to unlock premium items, power up your character,
                        or get ahead in the game, we've got you covered. Enjoy instant delivery,
                        multiple payment options, and a hassle-free experience that keeps
                        you focused on what matters most—winning the game!
                    </Text>
                </div>
            </section>


            <section className="container px-4 mx-auto mt-8">
                <div className="flex flex-col gap-16 p-4 bg-slate-100 rounded-2xl">
                    <div className="flex flex-col gap-6">
                        <Text className="font-medium" >Author</Text>
                        <div className="flex gap-2 items-center">
                            <div className="relative w-16 h-16 rounded-full overflow-clip">
                                <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Text className="text-slate-700">@Green_Dragon_3</Text>
                                <Text size="sm" className="text-slate-500">from July 2025</Text>
                                <div className="flex items-center gap-2">
                                    <Icon icon="star" className="w-5 h-5 text-amber-500" />
                                    <Text className="font-medium">4.8</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Text className="text-slate-500" size="sm">
                            Make to provide correct game account details. Once purchased, items are delivered instantly and cannot be refunded.
                        </Text>
                        <button className="flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-full">
                            <Text className="font-medium">Buy for 23</Text>
                            <Icon className="w-6 h-6" icon="flash" />
                            <Icon className="ml-auto w-6 h-6" icon="bag" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="container px-4 mx-auto mt-8 mb-40">

                <div className="flex flex-col gap-6 px-2 py-3 bg-slate-200 rounded-xl">
                    <div className="flex justify-between items-center">
                        <Text className="font-medium"  >
                            Featured offers
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
        </>
    )
}

export default OfferPage;