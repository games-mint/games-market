import { dealStatusEnum } from "@/db/schema";

export type Offer = {
    id: number;
    authorId: string;
    productId: number;
    createdAt: Date;
    description: string;
    title: string;
    imageUrl: string;
    price: number;
}

export type Profile = {
    id: string;
    name: string;
    bio: string | null;
    avatarUrl: string | null;
    createdAt: Date;
}

export type DealStatus = (typeof dealStatusEnum.enumValues)[number]

export type Deal = {
    id: number,
    sellerId: string,
    buyerId: string,
    postId: number,
    status: DealStatus,
    result: string | null,
}


export type FullDealDetails = {
    deal: Deal,
    offer: Offer,
    seller: Profile
}