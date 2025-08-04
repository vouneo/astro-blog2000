import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    categories: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  posts,
};