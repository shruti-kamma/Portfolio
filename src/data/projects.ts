import { getCollection, type CollectionEntry } from 'astro:content';

export type Accent = CollectionEntry<'projects'>['data']['accent'];
export type Tool = CollectionEntry<'projects'>['data']['tools'][number];

// The fill, text-safe, and on-fill shades for a project's accent, as inline custom properties.
export function accentVars(accent: Accent) {
	return `--card-accent: var(--color-${accent}); --card-accent-text: var(--color-${accent}-text); --card-accent-on: var(--color-${accent}-on)`;
}

const CATEGORY_ORDER = { freelance: 0, project: 1 } as const;

// Freelance work first, then personal/team projects, each by `order` —
// the same sequence the homepage shows, so next/prev links follow it too.
export async function getSortedProjects() {
	return (await getCollection('projects')).sort(
		(a, b) => CATEGORY_ORDER[a.data.category] - CATEGORY_ORDER[b.data.category] || a.data.order - b.data.order
	);
}
