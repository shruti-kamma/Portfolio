import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		blurb: z.string(),
		orientation: z.enum(['portrait', 'landscape']),
		accent: z.enum(['accent', 'project-1', 'project-2', 'project-3', 'project-4']),
		tags: z.array(z.string()).default([]),
		order: z.number(),
	}),
});

export const collections = { projects };
