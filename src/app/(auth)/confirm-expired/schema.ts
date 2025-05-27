import { z } from "zod";

export const confirmEmailSchema = z.object({
    email: z.string().nonempty().email(),
})
