<script lang="ts">
	import { page } from '$app/stores';
	import { projects, getProjectBySlug, getProjectIndex } from '$lib/data/projects';
	
	const siteUrl = 'https://www.pixel-slayer.com';
	
	$: slug = $page.params.slug;
	$: project = getProjectBySlug(slug);
	$: currentIndex = getProjectIndex(slug);
	$: previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
	$: nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
	$: pageUrl = `${siteUrl}/projects/${slug}`;
	$: metaDescription = project ? `${project.name} (${project.year}) - ${project.description[0].substring(0, 155)}...` : '';
</script>

<svelte:head>
	{#if project}
		<title>{project.name} - Pixel Slayer</title>
		<meta name="description" content={metaDescription} />
		<link rel="canonical" href={pageUrl} />
		
		<!-- Open Graph -->
		<meta property="og:type" content="article" />
		<meta property="og:url" content={pageUrl} />
		<meta property="og:title" content="{project.name} - Pixel Slayer" />
		<meta property="og:description" content={metaDescription} />
		<meta property="og:site_name" content="Pixel Slayer" />
	{/if}
</svelte:head>

{#if project}
	<article class="project-detail">
		<header class="project-header">
			<h1>{project.name}</h1>
			{#if project.vimeoId}
				<div class="project-meta">
					<div class="meta-item">
						<span class="meta-label">Year:</span>
						<span class="meta-value">{project.year}</span>
					</div>
					<div class="meta-item">
						<span class="meta-label">Platforms:</span>
						<span class="meta-value">{project.platforms.join(', ')}</span>
					</div>
				</div>
			{/if}
		</header>

		<div class="project-video">
			{#if project.vimeoId}
				<iframe
					src={`https://player.vimeo.com/video/${project.vimeoId}`}
					width="100%"
					height="500"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					allowfullscreen
					title={project.name}
				></iframe>
			{:else if project.youtubeId}
				<iframe
					src={`https://www.youtube.com/embed/${project.youtubeId}`}
					width="100%"
					height="500"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					title={project.name}
				></iframe>
			{/if}
		</div>

		<div class="project-content">
			{#each project.description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<nav class="project-navigation">
			<div class="nav-button prev">
				{#if previousProject}
					<a href={`/projects/${previousProject.slug}`}>
						<span class="nav-label">← Previous</span>
						<span class="nav-title">{previousProject.name}</span>
					</a>
				{:else}
					<div class="nav-spacer"></div>
				{/if}
			</div>
			
			<div class="nav-home">
				<a href="/projects">⬢ All Projects</a>
			</div>
			
			<div class="nav-button next">
				{#if nextProject}
					<a href={`/projects/${nextProject.slug}`}>
						<span class="nav-label">Next →</span>
						<span class="nav-title">{nextProject.name}</span>
					</a>
				{:else}
					<div class="nav-spacer"></div>
				{/if}
			</div>
		</nav>
	</article>
{:else}
	<div class="not-found">
		<h1>Project Not Found</h1>
		<p>The project you're looking for doesn't exist.</p>
		<a href="/" class="back-button">← Back to Home</a>
	</div>
{/if}

<style>
	.project-detail {
		max-width: 900px;
		margin: 0 auto;
	}

	.project-header {
		text-align: center;
		margin-bottom: 3rem;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 26, 26, 0.9) 100%);
		backdrop-filter: blur(8px);
		border: 3px solid var(--blood-red);
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
	}

	.project-header h1 {
		margin-bottom: 1rem;
		font-size: 2.5rem;
	}

	.project-meta {
		display: flex;
		gap: 2rem;
		justify-content: center;
		margin-top: 1.5rem;
		padding: 1rem 2rem;
		background: rgba(139, 0, 0, 0.1);
		border-radius: 8px;
		border: 1px solid var(--blood-red);
	}

	.meta-item {
		display: flex;
		gap: 0.5rem;
		align-items: baseline;
	}

	.meta-label {
		color: var(--hell-fire);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.meta-value {
		color: var(--bone-white);
		font-size: 1rem;
	}

	.project-video {
		margin-bottom: 3rem;
		border: 3px solid var(--blood-red);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8),
					0 0 60px rgba(139, 0, 0, 0.3);
		aspect-ratio: 16 / 9;
		background: var(--abyss-black);
	}

	.project-video iframe {
		width: 100%;
		height: 100%;
		display: block;
		border: none;
	}

	.project-content {
		background: linear-gradient(180deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.4) 100%);
		padding: 2rem;
		border-radius: 12px;
		margin-bottom: 2rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
	}

	.project-content p {
		font-size: 1.1rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
		color: var(--bone-white);
	}

	.project-content p:last-of-type {
		margin-bottom: 2rem;
	}

	.project-navigation {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		margin-top: 4rem;
		padding: 2rem 0;
		border-top: 3px solid var(--blood-red);
	}

	.nav-button {
		display: flex;
		flex-direction: column;
	}

	.nav-button.prev {
		align-items: flex-start;
	}

	.nav-button.next {
		align-items: flex-end;
		text-align: right;
	}

	.nav-button a {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.5rem;
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 26, 26, 0.8) 100%);
		border: 2px solid var(--blood-red);
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.3s ease;
		min-width: 200px;
	}

	.nav-button a:hover {
		background: linear-gradient(135deg, rgba(139, 0, 0, 0.3) 0%, rgba(220, 20, 60, 0.3) 100%);
		border-color: var(--hell-fire);
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(139, 0, 0, 0.5);
	}

	.nav-label {
		font-size: 0.9rem;
		color: var(--hell-fire);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.nav-title {
		font-size: 1.1rem;
		color: var(--bone-white);
		font-weight: 600;
	}

	.nav-home {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-home a,
	.back-button {
		display: inline-flex;
		align-items: center;
		color: var(--hell-fire);
		font-size: 1.1rem;
		font-weight: 700;
		text-decoration: none;
		padding: 1rem 2rem;
		border: 3px solid var(--blood-red);
		border-radius: 8px;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 2px;
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 26, 26, 0.9) 100%);
	}

	.nav-home a:hover,
	.back-button:hover {
		background: linear-gradient(135deg, var(--blood-red) 0%, var(--crimson) 100%);
		border-color: var(--hell-fire);
		transform: scale(1.05);
		box-shadow: 0 8px 25px rgba(139, 0, 0, 0.6);
	}

	.nav-spacer {
		min-height: 1px;
	}

	.not-found {
		text-align: center;
		padding: 4rem 2rem;
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 26, 26, 0.9) 100%);
		border: 3px solid var(--blood-red);
		border-radius: 12px;
		max-width: 600px;
		margin: 4rem auto;
	}

	.not-found h1 {
		margin-bottom: 1rem;
	}

	.not-found p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.project-detail {
			padding: 0 1rem;
		}

		.project-header {
			padding: 1.5rem;
			margin-bottom: 2rem;
		}

		.project-header h1 {
			font-size: 1.8rem;
		}

		.project-meta {
			font-size: 0.95rem;
		}

		.year {
			font-size: 1rem;
		}

		.project-video {
			margin-bottom: 2rem;
		}

		.project-content {
			padding: 1.5rem;
		}

		.project-content p {
			font-size: 1rem;
		}

		.project-navigation {
			grid-template-columns: 1fr;
			gap: 1rem;
			margin-top: 2rem;
			padding: 1.5rem 0;
		}

		.nav-button {
			align-items: stretch !important;
		}

		.nav-button.next {
			text-align: left;
		}

		.nav-button a {
			min-width: auto;
			padding: 1rem;
		}

		.nav-label {
			font-size: 0.8rem;
		}

		.nav-title {
			font-size: 0.95rem;
		}

		.nav-home {
			order: -1;
			margin-bottom: 0.5rem;
		}

		.nav-home a {
			font-size: 0.95rem;
			padding: 0.75rem 1.5rem;
			letter-spacing: 1px;
		}
	}

	@media (max-width: 480px) {
		.project-detail {
			padding: 0 0.5rem;
		}

		.project-header {
			padding: 1rem;
		}

		.project-header h1 {
			font-size: 1.5rem;
		}

		.project-meta {
			font-size: 0.85rem;
			gap: 0.5rem;
		}

		.platforms {
			font-size: 0.75rem;
		}

		.project-video {
			height: auto;
		}

		.project-video iframe {
			height: 200px;
			width: 100%;
font-size: 0.85rem;
			padding: 0.75rem 1.25rem;
		}
	}
</style>
