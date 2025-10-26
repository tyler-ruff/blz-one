import { z } from 'zod';

export const schema = z.object({
    description: z.string({
        error: 'Invalid description'
    })
    .min(1)
    .max(255),
    type: z.string()
    .min(3),
    value: z.string(),
    date: z.string()
})