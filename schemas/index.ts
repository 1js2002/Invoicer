
import * as z from "zod";

export const RegisterSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
});
