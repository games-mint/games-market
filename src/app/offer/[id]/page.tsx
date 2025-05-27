import { eq } from "drizzle-orm";
import { db } from "@/db";
import { posts, profiles } from "@/db/schema";

import Featured from "@/app/components/featured";
import Image from "next/image"
import Link from "next/link";
import Icon from "@/app/components/common/icon";
import Text from "@/app/components/common/text";

const OfferPage = async ({
    params,
}: {
    params: Promise<{ id: number }>
}) => {
    const { id } = await params;

    const offers = await db.select().from(posts).where(eq(posts.id, id)).leftJoin(profiles, eq(posts.author_id, profiles.id));

    const offer = offers[0];

    if (offer === null)
        return null;

    return (
        <>
            <div className="sm:container sm:px-4 sm:mx-auto lg:flex justify-start gap-4">

                <div className="lg:max-w-[660px]">
                    <div className="w-full aspect-[3/2] relative overflow-clip sm:rounded-2xl lg:mb-16">
                        <Image className="object-cover" fill src={offer.posts.image_url} alt="Dota 2 thumbnail" />
                    </div>
                    <section className="max-lg:container px-4 mx-auto mt-8">
                        <div className="flex flex-col gap-8">
                            <h3 className="text-xl font-medium lg:text-4xl"  >{offer.posts.title}</h3>
                            <p className="text-sm lg:text-base">
                                {offer.posts.description}
                            </p>
                        </div>
                    </section>
                </div>

                <section className="max-lg:container px-4 mx-auto mt-8 lg:mt-0">
                    <div className="flex flex-col gap-16 p-4 bg-slate-100 rounded-2xl sm:max-w-[400px] sm:ml-auto lg:sticky lg:top-[64px]">
                        <div className="flex flex-col gap-6">
                            <Text className="font-medium" >Author</Text>
                            <Link href={`/sellers/${offer.profiles?.id}`} className="flex gap-3 items-center">
                                {offer.profiles?.avatar_url ? (
                                    <div className="relative w-16 h-16 rounded-full overflow-clip">
                                        <Image className="object-fill" src={offer.profiles?.avatar_url} fill alt="profile image" />
                                    </div>
                                ) : (
                                    <div className="relative w-16 h-16 rounded-full overflow-clip bg-slate-300" />
                                )}
                                <div className="flex flex-col gap-2">
                                    <Text className="text-slate-700">{offer.profiles?.name}</Text>
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
                                <Text className="font-medium">Buy for {offer.posts.price}</Text>
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