import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    projectUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().optional(),
  }),
});

const explorations = defineCollection({
  type: 'content',
  schema: z.object({
    'Date Created': z.coerce.date().nullable().optional(),
    'Date Motified': z.coerce.date().nullable().optional(),
    Category: z.string().nullable().optional(),
    tags: z.array(z.string()).nullable().optional(),
  }),
});

export const collections = { blog, projects, explorations };
