'use client';
import { useEffect, useRef, useState, useTransition } from "react";

import Carousel, { CarouselElement, CarouselRef } from "@/app/components/common/carousel";
import Icon from "@/app/components/common/icon";
import OfferCard from "./offerCard";
import { Offer, Profile } from "@/common/types";
import { getRecomendedPosts } from "../actions/featured";


type Props = {
    title: string
}

const Featured = ({ title }: Props) => {
    const carouselRef = useRef<CarouselRef>(null);
    const [posts, setPosts] = useState<{ post: Offer, seller: Profile }[]>([]);
    const [transition, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            const postsData = await getRecomendedPosts()
            setPosts(postsData.map(el => ({
                post: el.posts!,
                seller: el.profiles!
            })))
        })
    }, [])

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
        <div className="flex flex-col gap-6 px-3 py-4 lg:p-6 bg-slate-200 rounded-xl">
            <div className="flex justify-between items-center">
                <h4 className="text-base font-medium lg:text-xl"  >
                    {title}
                </h4>
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
                {transition
                    ? <div className="" />
                    :
                    posts.map(post => (
                        <CarouselElement key={post.post.id}>
                            <OfferCard offer={post.post} seller={post.seller} className="w-[220px] lg:w-[260px]" type="alt" />
                        </CarouselElement>
                    ))

                }
            </Carousel>
        </div>
    )
}

export default Featured;