import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const outcomeShapes = z.enum(['triangle-up', 'circle', 'triangle-down']);
const tool = z.enum(['figma', 'github', 'astro', 'tailwind', 'netlify', 'supabase', 'nextjs', 'typescript', 'python', 'claude']);

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			blurb: z.string(),
			orientation: z.enum(['portrait', 'landscape']),
			accent: z.enum(['accent', 'project-1', 'project-2', 'project-3', 'project-4', 'project-5']),
			tags: z.array(z.string()).default([]),
			category: z.enum(['freelance', 'project']).default('project'),
			order: z.number(),

			heroImage: image().optional(),
			context: z.string(),
			scope: z.string(),
			duration: z.string(),
			role: z.string(),
			liveUrl: z.url().optional(),
			tools: z.array(tool),

			outcomes: z
				.array(
					z.object({
						shape: outcomeShapes,
						label: z.string(),
					}),
				)
				.length(3),

			process: z
				.array(
					z.object({
						problem: z.string(),
						description: z.string(),
						image: image().optional(),
					}),
				)
				.length(3),

			finalDesignImage: image().optional(),

			learnings: z.array(z.string()).length(3),
		}),
});

const findingCategory = z.enum([
	'Information Architecture',
	'Navigation',
	'Forms & Interaction',
	'Design & Layout',
	'Mobile & Responsiveness',
	'Legal & Compliance',
	'Trust & Credibility',
]);

const audits = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/audits' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			blurb: z.string(),
			order: z.number(),
			date: z.string(),
			version: z.string(),
			reportUrl: z.string().optional(),
			findings: z.array(
				z.object({
					title: z.string(),
					category: findingCategory,
					wcag: z.string().optional(),
					note: z.string().optional(),
					images: z.array(image()).optional(),
				}),
			),
			summary: z.array(z.string()),
		}),
});

const certifications = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			issuer: z.string(),
			date: z.string(),
			courseCount: z.string().optional(),
			verifyUrl: z.string().optional(),
			image: image().optional(),
			imagePosition: z.string().optional(),
			order: z.number(),
		}),
});

export const collections = { projects, audits, certifications };
