<script lang="ts">
	const siteUrl = 'https://www.pixel-slayer.com';
	
	let { data } = $props();
	let pageUrl = $derived(`${siteUrl}/blog/${data.slug}`);
</script>

<svelte:head>
	<title>{data.metadata.title} - Pixel Slayer</title>
	<meta name="description" content={data.metadata.excerpt} />
	<link rel="canonical" href={pageUrl} />
	
	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content="{data.metadata.title} - Pixel Slayer" />
	<meta property="og:description" content={data.metadata.excerpt} />
	<meta property="og:site_name" content="Pixel Slayer" />
	<meta property="article:published_time" content={data.metadata.date} />
</svelte:head>

<article class="blog-post">
	<header class="post-header">
		<a href="/blog" class="back-link">← Back to Blog</a>
		<h1>{data.metadata.title}</h1>
		<time datetime={data.metadata.date}>
			{new Date(data.metadata.date).toLocaleDateString('en-US', { 
				year: 'numeric', 
				month: 'long', 
				day: 'numeric' 
			})}
		</time>
	</header>

	<div class="post-content">
		<data.content />
	</div>
</article>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.post-header {
		text-align: center;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 3px solid var(--blood-red);
	}

	.back-link {
		display: inline-block;
		color: var(--hell-fire);
		text-decoration: none;
		font-weight: 600;
		margin-bottom: 2rem;
		padding: 0.5rem 1rem;
		border: 2px solid var(--blood-red);
		border-radius: 6px;
		transition: all 0.3s ease;
	}

	.back-link:hover {
		background-color: rgba(139, 0, 0, 0.2);
		border-color: var(--hell-fire);
		transform: translateX(-5px);
	}

	.post-header h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.post-header time {
		color: var(--hell-fire);
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.post-content {
		line-height: 1.8;
	}

	@media (max-width: 768px) {
		.blog-post {
			padding: 1rem;
		}

		.post-header h1 {
			font-size: 2rem;
		}

		.post-header time {
			font-size: 1rem;
		}
	}
</style>
