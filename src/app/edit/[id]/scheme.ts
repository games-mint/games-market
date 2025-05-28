import { z } from "zod"


export const createOrUpdateOfferSchema = z.object({
    title: z.string().nonempty().max(256),
    description: z.string().nonempty(),
    productId: z.number(),
    price: z.number().min(1),
    imageUrl: z.string(),
})
