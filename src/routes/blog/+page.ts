export async function load() {
	const postFiles = import.meta.glob('./*.md', { eager: false });
	const posts = [];

	for (const path in postFiles) {
		const slug = path.replace('./', '').replace('.md', '');
		
		// Skip invalid or empty slugs
		if (!slug || slug === 'undefined') continue;
		
		const post = await postFiles[path]();
		
		posts.push({
			slug,
			title: post.metadata.title,
			date: post.metadata.date,
			excerpt: post.metadata.excerpt
		});
	}

	// Sort posts by date, newest first
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts
	};
}
