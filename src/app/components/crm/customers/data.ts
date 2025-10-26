import { z } from 'zod';

export const schema = z.object({
    name: z.string({
        error: 'Invalid company name'
    })
    .min(1)
    .max(255),
    companyContact: z.object({
        email: z.email().optional(),
        phone: z.string().optional(),
        website: z.url().optional()
    })
})