import { defineCollection, z } from 'astro:content';

const servicios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date().optional(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    img: z.string().optional(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
  servicios,
};
