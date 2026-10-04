export type TextBlock = { type: 'p'; text: string } | { type: 'ul'; items: string[] };

// Minimal formatting for long frontmatter strings: blank lines separate
// paragraphs, and consecutive lines starting with "- " become a bullet list.
export function toBlocks(text: string): TextBlock[] {
	const blocks: TextBlock[] = [];
	let para: string[] = [];
	let list: string[] = [];

	const flush = () => {
		if (para.length) blocks.push({ type: 'p', text: para.join(' ') });
		if (list.length) blocks.push({ type: 'ul', items: list });
		para = [];
		list = [];
	};

	for (const raw of text.split('\n')) {
		const line = raw.trim();
		if (!line) {
			flush();
		} else if (line.startsWith('- ')) {
			if (para.length) flush();
			list.push(line.slice(2));
		} else {
			if (list.length) flush();
			para.push(line);
		}
	}
	flush();
	return blocks;
}
