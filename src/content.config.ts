import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

// One Markdown file per project. Entries with `case: true` also get a case page
// at /werk/<id>, rendered from the Markdown body.
const werk = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/werk' }),
    schema: z.object({
        title: z.string(),
        url: z.url(),
        client: z.string(),
        tech: z.array(z.string()).min(1),
        // One line under the card title.
        summary: z.string(),
        // A short paragraph for the featured project on the homepage.
        intro: z.string().optional(),
        relation: z.enum([
            'eigen klant',
            'eigen product',
            'met Perfect Web Team',
            'vrijwilligerswerk'
        ]),
        // File name (without extension) in images/werk/; see scripts/generate-images.mjs.
        image: z.string(),
        order: z.number(),
        featured: z.boolean().default(false),
        case: z.boolean().default(false),
        role: z.string().optional(),
        since: z.number().optional()
    })
});

export const collections = { werk };
