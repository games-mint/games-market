'use client'

import Icon from "@/app/components/common/icon";
import Text from "@/app/components/common/text";

import Featured from "@/app/components/featured";
import Image from "next/image"
import Link from "next/link";

const OfferPage = () => {
    return (
        <>
            <div className="sm:container sm:px-4 sm:mx-auto lg:flex justify-start gap-4">

                <div className="lg:max-w-[660px]">
                    <div className="w-full aspect-[3/2] relative overflow-clip sm:rounded-2xl lg:mb-16">
                        <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnail" />
                    </div>
                    <section className="max-lg:container px-4 mx-auto mt-8">
                        <div className="flex flex-col gap-8">
                            <h3 className="text-xl font-medium lg:text-4xl"  >Dota 2 Account with skins</h3>
                            <p className="text-sm lg:text-base">
                                Easily top up your in-game currency with our fast and secure top-up service.
                                Whether you're looking to unlock premium items, power up your character,
                                or get ahead in the game, we've got you covered. Enjoy instant delivery,
                                multiple payment options, and a hassle-free experience that keeps
                                you focused on what matters most—winning the game!
                            </p>
                        </div>
                    </section>
                </div>

                <section className="max-lg:container px-4 mx-auto mt-8 lg:mt-0">
                    <div className="flex flex-col gap-16 p-4 bg-slate-100 rounded-2xl sm:max-w-[400px] sm:ml-auto lg:sticky lg:top-[64px]">
                        <div className="flex flex-col gap-6">
                            <Text className="font-medium" >Author</Text>
                            <Link href="/sellers/1" className="flex gap-3 items-center">
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
                            </Link>
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
            </div>




            <section className="container px-4 mx-auto mt-8 mb-40 lg:mt-16 lg:mb-16">
                <Featured title="Simillar offers" />
            </section>
        </>
    )
}

export default OfferPage;