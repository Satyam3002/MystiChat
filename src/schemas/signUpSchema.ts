import {z} from 'zod';

export const usernameValidation =  z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot be longer than 20 characters" })
    .regex(/^[a-zA-Z0-9_]*$/, { message: "Username can only contain alphanumeric characters and underscores" 
    });

    export const signUpSchema = z.object({
        username: usernameValidation,
        email: z.string().email({ message: "Please use a valid email address" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),

    });