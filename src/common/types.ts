import { dealStatusEnum, categoryEnum } from "@/db/schema";

export type ProductCategories = (typeof categoryEnum.enumValues)[number]
export type DealStatus = (typeof dealStatusEnum.enumValues)[number]

export type Product = {
    id: number;
    name: string;
    category: ProductCategories;
    imageUrl: string;
}

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
    rating: number | null
}



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

export type Review = {
    id: number;
    authorId: string;
    receiverId: string;
    rating: number;
    message: string | null;
    createdAt: Date;
}