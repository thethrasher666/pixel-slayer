<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';
	
	const siteUrl = 'https://www.pixel-slayer.com';
	
	// Add thumbnail property to projects
	let projectsWithThumbnails = $state(projects.map(p => ({ ...p, thumbnail: '' })));
	
	onMount(async () => {
		for (let project of projectsWithThumbnails) {
			try {
				if (project.vimeoId) {
					const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${project.vimeoId}`);
					const data = await response.json();
					project.thumbnail = data.thumbnail_url;
				} else if (project.youtubeId) {
					// Use YouTube thumbnail
					project.thumbnail = `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;
				}
			} catch (error) {
				console.error(`Failed to load thumbnail for ${project.name}:`, error);
			}
		}
	});
</script>

<svelte:head>
	<title>All Projects - Jamie Kenyon | Pixel Slayer</title>
	<meta name="description" content="Jamie Kenyon's complete VFX and game portfolio including Mari, Modo, Katana, The Persistence, InviZimals: The Lost Kingdom, Disney Th!nk Fast, and the Buzz! Junior series. Battle-tested games forged in the fires of development." />
	<meta name="author" content="Jamie Kenyon" />
	<link rel="canonical" href="{siteUrl}/projects" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{siteUrl}/projects" />
	<meta property="og:title" content="All Projects - Pixel Slayer" />
	<meta property="og:description" content="A complete collection of battle-tested games including The Persistence, InviZimals: The Lost Kingdom, Disney Th!nk Fast, and the Buzz! Junior series." />
	<meta property="og:site_name" content="Pixel Slayer" />
</svelte:head>

<div class="projects-page">
	<header class="page-header">
		<h1>All Projects</h1>
		<p>Projects carved from the depths of development hell</p>
	</header>

	<div class="projects-grid">
		{#each projectsWithThumbnails as project}
			<div 
				class="project-card" 
				role="button"
				tabindex="0"
				onclick={() => window.location.href = `/projects/${project.slug}`}
				onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.href = `/projects/${project.slug}`; }}}
			>
				<div class="project-thumbnail">
					{#if project.thumbnail}
						<img src={project.thumbnail} alt={project.name} />
					{:else}
						<div class="thumbnail-placeholder">
							<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
							</svg>
						</div>
					{/if}
					<div class="overlay">
						<span class="view-project">View Project →</span>
					</div>
				</div>
				
				<div class="project-info">
					<h2>{project.name}</h2>
					{#if project.vimeoId}
						<div class="project-meta">
							<div class="meta-row">
								<span class="meta-label">Year:</span>
								<span class="meta-value">{project.year}</span>
							</div>
							<div class="meta-row">
								<span class="meta-label">Platforms:</span>
								<span class="meta-value">{project.platforms.join(', ')}</span>
							</div>
							{#if project.metacriticUrl}
								<a href={project.metacriticUrl} target="_blank" rel="noopener noreferrer" class="metacritic-link" onclick={(e) => e.stopPropagation()}>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
									</svg>
									Metacritic
								</a>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<div class="back-link">
		<a href="/">← Back to Home</a>
	</div>
</div>

<style>
	.projects-page {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 4rem;
		padding: 3rem 2rem;
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 26, 26, 0.9) 100%);
		backdrop-filter: blur(8px);
		border: 3px solid var(--blood-red);
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
	}

	.page-header h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, var(--hell-fire) 0%, var(--crimson) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.page-header p {
		font-size: 1.3rem;
		color: var(--bone-white);
		opacity: 0.9;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.project-card {
		background: linear-gradient(180deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.6) 100%);
		border: 2px solid var(--blood-red);
		border-radius: 12px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

	.project-card:hover {
		transform: translateY(-8px);
		border-color: var(--hell-fire);
		box-shadow: 0 12px 40px rgba(139, 0, 0, 0.6);
	}

	.project-thumbnail {
		position: relative;
		width: 100%;
		padding-top: 56.25%; /* 16:9 aspect ratio */
		background: var(--shadow-gray);
		overflow: hidden;
	}

	.project-thumbnail img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.project-card:hover .project-thumbnail img {
		transform: scale(1.1);
	}

	.thumbnail-placeholder {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--ash-gray);
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, transparent 0%, rgba(139, 0, 0, 0.9) 100%);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding: 2rem;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-card:hover .overlay {
		opacity: 1;
	}

	.view-project {
		color: var(--bone-white);
		font-size: 1.2rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.project-info {
		padding: 1.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.project-info h2 {
		font-size: 1.4rem;
		margin: 0;
		color: var(--bone-white);
	}

	.project-meta {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 0.85rem;
		padding-top: 0.5rem;
		border-top: 1px solid rgba(139, 0, 0, 0.3);
	}

	.meta-row {
		display: flex;
		gap: 0.5rem;
	}

	.meta-label {
		color: var(--hell-fire);
		font-weight: 700;
		min-width: 75px;
	}

	.meta-value {
		color: var(--bone-white);
		opacity: 0.9;
	}

	.metacritic-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: 0.5rem;
		padding: 0.4rem 0.8rem;
		background: rgba(139, 0, 0, 0.2);
		color: var(--hell-fire);
		text-decoration: none;
		border: 1px solid var(--blood-red);
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
		transition: all 0.3s ease;
		width: fit-content;
	}

	.metacritic-link:hover {
		background: rgba(139, 0, 0, 0.4);
		border-color: var(--hell-fire);
		color: var(--bone-white);
		transform: translateX(2px);
	}

	.metacritic-link svg {
		flex-shrink: 0;
	}

	.back-link {
		text-align: center;
		padding-top: 2rem;
		border-top: 3px solid var(--blood-red);
	}

	.back-link a {
		display: inline-block;
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

	.back-link a:hover {
		background: linear-gradient(135deg, var(--blood-red) 0%, var(--crimson) 100%);
		border-color: var(--hell-fire);
		transform: scale(1.05);
		box-shadow: 0 8px 25px rgba(139, 0, 0, 0.6);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.page-header p {
			font-size: 1.1rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.project-info h2 {
			font-size: 1.2rem;
		}

		.project-meta {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 480px) {
		.projects-page {
			padding: 1rem;
		}

		.page-header {
			padding: 2rem 1rem;
			margin-bottom: 2rem;
		}

		.page-header h1 {
			font-size: 2rem;
		}

		.page-header p {
			font-size: 1rem;
		}

		.project-info {
			padding: 1rem;
		}
	}
</style>
