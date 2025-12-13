<script lang="ts">
	interface Post {
		slug: string;
		title: string;
		date: string;
		excerpt: string;
	}

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Jamie Kenyon | Pixel Slayer</title>
	<meta name="description" content="Jamie Kenyon's blog - thoughts from the metal underground. Coding insights, game development stories, and technical musings from a veteran developer who still codes like it's 1987." />
	<meta name="author" content="Jamie Kenyon" />
	<link rel="canonical" href="https://www.pixel-slayer.com/blog" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.pixel-slayer.com/blog" />
	<meta property="og:title" content="Blog - Pixel Slayer" />
	<meta property="og:description" content="Thoughts from the metal underground - coding insights, game development stories, and technical musings." />
	<meta property="og:site_name" content="Pixel Slayer" />
</svelte:head>

<div class="blog-header">
	<h1>The Metal Chronicles</h1>
	<p>Thoughts from the depths of the underground</p>
</div>

<div class="posts-grid">
	{#each data.posts as post}
		<article class="post-card">
			<a href={`/blog/${post.slug}`}>
				<h2>{post.title}</h2>
				<time datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
				<p>{post.excerpt}</p>
				<span class="read-more">Read More →</span>
			</a>
		</article>
	{/each}
</div>

<style>
	.blog-header {
		text-align: center;
		padding: 3rem 0;
		border-bottom: 3px solid var(--blood-red);
		margin-bottom: 3rem;
	}

	.blog-header h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
	}

	.blog-header p {
		font-size: 1.3rem;
		color: var(--hell-fire);
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.post-card {
		background-color: var(--shadow-gray);
		border: 2px solid var(--ash-gray);
		border-radius: 8px;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.post-card:hover {
		border-color: var(--blood-red);
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(139, 0, 0, 0.4);
	}

	.post-card a {
		display: block;
		padding: 2rem;
		color: var(--bone-white);
	}

	.post-card h2 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		border: none;
		padding-bottom: 0;
		color: var(--bone-white);
	}

	.post-card:hover h2 {
		color: var(--hell-fire);
	}

	time {
		display: block;
		font-size: 0.9rem;
		color: var(--hell-fire);
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.post-card p {
		color: var(--bone-white);
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.read-more {
		display: inline-block;
		color: var(--crimson);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 0.9rem;
	}

	.post-card:hover .read-more {
		color: var(--hell-fire);
	}

	@media (max-width: 768px) {
		.posts-grid {
			grid-template-columns: 1fr;
		}

		.blog-header h1 {
			font-size: 2rem;
		}
	}
</style>
