import type { RequestHandler } from './$types';

const site = 'https://www.pixel-slayer.com';

export const GET: RequestHandler = async () => {
	const robots = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
