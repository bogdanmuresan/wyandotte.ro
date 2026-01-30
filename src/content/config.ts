import { defineCollection, z } from 'astro:content';

const rasaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

const articoleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const evenimenteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    type: z.enum(['expozitie', 'intalnire', 'conferinta', 'altele']),
    organizer: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = {
  rasa: rasaCollection,
  articole: articoleCollection,
  evenimente: evenimenteCollection,
};
