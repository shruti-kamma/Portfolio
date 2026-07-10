import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const outcomeShapes = z.enum(['triangle-up', 'circle', 'triangle-down']);
const tool = z.enum(['figma', 'github']);

const processStep = z.object({
	problem: z.string(),
	description: z.string(),
	image: z.string().optional(),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		blurb: z.string(),
		orientation: z.enum(['portrait', 'landscape']),
		accent: z.enum(['accent', 'project-1', 'project-2', 'project-3', 'project-4']),
		tags: z.array(z.string()).default([]),
		order: z.number(),

		heroImage: z.string().optional(),
		context: z.string(),
		scope: z.string(),
		duration: z.string(),
		role: z.string(),
		tools: z.array(tool),

		outcomes: z
			.array(
				z.object({
					shape: outcomeShapes,
					label: z.string(),
				})
			)
			.length(3),

		process: z.array(processStep).length(3),

		finalDesignImage: z.string().optional(),

		learnings: z.array(z.string()).length(3),
	}),
});

export const collections = { projects };
