import { z } from "zod"
import { checkUsernameUniqueness } from "../actions/auth"

export const signUpSchema = z.object({
    email: z.string().nonempty().email().max(256),
    password: z.string().min(8).max(256).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/),
    username: z.string().nonempty().max(256).refine(async username => {
        return await checkUsernameUniqueness(username)
    }),
})
