import type { RequestHandler } from './$types';
import { projects } from '$lib/data/projects';

const site = 'https://www.pixel-slayer.com';

export const GET: RequestHandler = async () => {
	// Get all blog posts
	const blogPostFiles = import.meta.glob('../blog/*.md');
	const blogSlugs: string[] = [];
	
	for (const path in blogPostFiles) {
		const slug = path.replace('../blog/', '').replace('.md', '');
		// Skip non-blog files
		if (slug !== '+page' && slug !== '+layout') {
			blogSlugs.push(slug);
		}
	}

	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: 'about', priority: '0.9', changefreq: 'monthly' },
		{ url: 'blog', priority: '0.9', changefreq: 'weekly' },
		{ url: 'projects', priority: '0.9', changefreq: 'monthly' }
	];

	// Add all blog posts
	blogSlugs.forEach(slug => {
		pages.push({
			url: `blog/${slug}`,
			priority: '0.8',
			changefreq: 'monthly'
		});
	});

	// Add all projects
	projects.forEach(project => {
		pages.push({
			url: `projects/${project.slug}`,
			priority: '0.8',
			changefreq: 'monthly'
		});
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		page => `	<url>
		<loc>${site}/${page.url}</loc>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
