import {z} from "zod"

export const MessageSchema = z.object({
     content: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(500, { message: "Message cannot be longer than 500 characters" }),
})