import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work experience. One markdown file per role. Body = the detailed write-up.
const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),          // e.g. "2024 — Present"
    location: z.string().optional(),
    url: z.string().url().optional(),
    summary: z.string(),         // one or two sentences shown on cards
    highlights: z.array(z.string()).default([]), // short, outcome-first bullets
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false), // shown on the homepage
    order: z.number().default(100),       // lower = higher on the page
  }),
});

// Side projects / experiments. Entries with draft: true are never published.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['shipped', 'in progress', 'experiment', 'archived']).default('shipped'),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Blog / writing. Entries with draft: true are never published.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, projects, blog };
