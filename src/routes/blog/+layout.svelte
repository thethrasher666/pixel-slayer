<script lang="ts">
	let { children } = $props();
</script>

<article class="blog-post">
	{@render children()}
</article>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.blog-post :global(h1) {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		border-bottom: 3px solid var(--blood-red);
		padding-bottom: 1rem;
	}

	.blog-post :global(h2) {
		font-size: 2rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--hell-fire);
	}

	.blog-post :global(h3) {
		font-size: 1.5rem;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--crimson);
	}

	.blog-post :global(p) {
		margin-bottom: 1.5rem;
		line-height: 1.8;
		font-size: 1.1rem;
	}

	.blog-post :global(a) {
		color: var(--hell-fire);
		text-decoration: underline;
	}

	.blog-post :global(a:hover) {
		color: var(--crimson);
	}

	.blog-post :global(ul),
	.blog-post :global(ol) {
		margin-bottom: 1.5rem;
		margin-left: 2rem;
		line-height: 1.8;
	}

	.blog-post :global(li) {
		margin-bottom: 0.5rem;
	}

	.blog-post :global(code) {
		background-color: var(--ash-gray);
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', Courier, monospace;
		color: var(--hell-fire);
	}

	.blog-post :global(pre) {
		background-color: var(--shadow-gray);
		border: 2px solid var(--blood-red);
		border-radius: 8px;
		padding: 1.5rem;
		overflow-x: auto;
		margin-bottom: 1.5rem;
	}

	.blog-post :global(pre code) {
		background-color: transparent;
		padding: 0;
	}

	.blog-post :global(blockquote) {
		border-left: 4px solid var(--blood-red);
		padding-left: 1.5rem;
		margin: 2rem 0;
		font-style: italic;
		color: var(--bone-white);
	}

	.blog-post :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		border: 2px solid var(--blood-red);
		margin: 2rem 0;
	}

	.blog-post :global(hr) {
		border: none;
		border-top: 2px solid var(--blood-red);
		margin: 3rem 0;
	}

	@media (max-width: 768px) {
		.blog-post {
			padding: 1rem;
		}

		.blog-post :global(h1) {
			font-size: 2rem;
		}

		.blog-post :global(h2) {
			font-size: 1.5rem;
		}
	}
</style>
