import { z } from 'zod';

export const schema = z.object({
    title: z.string({
        error: 'Invalid title'
    })
    .min(1),
    description: z.string(),
    status: z.string()
    .optional(),
    priority: z.string()
    .optional(),
    dueDate: z.string()
    .optional()
});