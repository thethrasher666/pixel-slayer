<script lang="ts">
	import VideoCarousel from '$lib/components/VideoCarousel.svelte';
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';

	const siteUrl = 'https://www.pixel-slayer.com';
	
	// Map projects to video data format (only include projects with Vimeo videos)
	const videoData = projects
		.filter(p => p.vimeoId)
		.map(p => ({
			id: p.vimeoId!,
			slug: p.slug,
			title: p.name
		}));

	// Start with fallback thumbnails immediately
	let videos = $state(videoData.map(v => ({ 
		id: v.id,
		slug: v.slug,
		title: v.title,
		thumbnail: `https://i.vimeocdn.com/video/${v.id}_640.jpg` 
	})));

	onMount(async () => {
		// Fetch better quality thumbnails from Vimeo API
		const videosWithThumbs = await Promise.all(
			videoData.map(async (video) => {
				try {
					const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${video.id}`);
					const data = await response.json();
					return {
						id: video.id,
						slug: video.slug,
						title: video.title,
						thumbnail: data.thumbnail_url
					};
				} catch (error) {
					console.error(`Failed to fetch thumbnail for video ${video.id}:`, error);
					// Keep the fallback thumbnail
					return {
						id: video.id,
						slug: video.slug,
						title: video.title,
						thumbnail: `https://i.vimeocdn.com/video/${video.id}_640.jpg`
					};
				}
			})
		);
		videos = videosWithThumbs;
	});
</script>

<svelte:head>
	<title>Jamie Kenyon - VFX Graphics Engineer | Mari, Modo, Foundry</title>
	<meta name="description" content="Jamie Kenyon - Performance critical graphics engineer specializing in VFX tools. Expert in Foundry Mari, Modo, and Katana. 12 years developing industry-standard visual effects software." />
	<meta name="keywords" content="Jamie Kenyon VFX, Jamie Kenyon Mari, Jamie Kenyon Foundry, Jamie Kenyon Modo, graphics engineer, VFX tools" />
	<meta name="author" content="Jamie Kenyon" />
	<link rel="canonical" href={siteUrl} />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content="Jamie Kenyon - VFX Graphics Engineer | Mari, Modo, Foundry" />
	<meta property="og:description" content="Performance critical graphics engineer specializing in VFX tools. Jamie Kenyon - Mari, Modo, Foundry expert with 12 years in visual effects." />
	<meta property="og:site_name" content="Pixel Slayer" />
	
	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{"@context":"https://schema.org","@type":"Person","name":"Jamie Kenyon","url":"https://www.pixel-slayer.com","jobTitle":"Performance Critical Graphics Engineer","description":"Performance critical graphics engineer specializing in VFX tools development including Foundry Mari, Modo, and Katana. 12 years in visual effects, expert in Pixar USD and graphics optimization. Background in homebrew console development and game programming.","knowsAbout":["Visual Effects","Graphics Programming","Performance Optimization","VFX Tools Development","Foundry Mari","Foundry Modo","Foundry Katana","3D Graphics","Assembly Programming","C++","USD","Pixar","Homebrew Console Development"],"expertise":["Foundry Mari","Foundry Modo","Foundry Katana","Pixar USD","Graphics Programming"],"alumniOf":"Sony Computer Entertainment","sameAs":["https://github.com/thethrasher666","https://www.linkedin.com/in/thethrasher666"]}
	</script>
</svelte:head>

<section class="hero">
	<h1>Jamie Kenyon</h1>
	<p class="subtitle">VFX Graphics Engineer • Foundry Mari & Modo Expert • Performance Critical Systems</p>
</section>

<section class="videos">
	<VideoCarousel {videos} />
</section>

<section class="blog-cta">
	<h2>Enter the Pit</h2>
	<p>Dive into the darkness and explore thoughts from the metal underground</p>
	<a href="/blog" class="cta-button">Read the Blog</a>
</section>

<style>
	.hero {
		text-align: center;
		padding: 5rem 2rem;
		background: linear-gradient(180deg, rgba(26, 26, 26, 0.9) 0%, rgba(10, 10, 10, 0.7) 100%);
		border-bottom: 3px solid var(--blood-red);
		margin-bottom: 4rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
	}

	.hero h1 {
		font-size: 4rem;
		margin-bottom: 0.5rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9),
					 4px 4px 8px var(--blood-red),
					 0 0 30px rgba(255, 69, 0, 0.4);
		animation: fadeInDown 0.8s ease-out;
	}

	.subtitle {
		font-size: 1.3rem;
		color: var(--bone-white);
		letter-spacing: 2px;
		margin-bottom: 0.5rem;
		opacity: 0.9;
		animation: fadeInUp 0.8s ease-out 0.1s both;
	}

	.tagline {
		font-size: 1.2rem;
		color: var(--hell-fire);
		letter-spacing: 5px;
		text-transform: uppercase;
		font-weight: 600;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
		animation: fadeInUp 0.8s ease-out 0.2s both;
	}

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.videos {
		margin: 4rem 0;
		padding: 2rem;
		background: linear-gradient(180deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.4) 100%);
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
	}

	.blog-cta {
		text-align: center;
		padding: 4rem 2rem;
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 26, 26, 0.9) 100%);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 3px solid var(--blood-red);
		border-radius: 12px;
		margin: 4rem 0;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
					0 0 60px rgba(139, 0, 0, 0.2);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.blog-cta:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 48px rgba(0, 0, 0, 0.7),
					0 0 80px rgba(139, 0, 0, 0.3);
	}

	.blog-cta h2 {
		margin-bottom: 1rem;
		border: none;
	}

	.blog-cta p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		color: var(--bone-white);
	}

	.cta-button {
		display: inline-block;
		background: linear-gradient(135deg, var(--blood-red) 0%, var(--crimson) 100%);
		color: var(--bone-white);
		padding: 1.2rem 3rem;
		font-size: 1.2rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 3px;
		border: 3px solid var(--crimson);
		border-radius: 8px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(139, 0, 0, 0.4);
		position: relative;
		overflow: hidden;
	}

	.cta-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: left 0.5s ease;
	}

	.cta-button:hover::before {
		left: 100%;
	}

	.cta-button:hover {
		background: linear-gradient(135deg, var(--crimson) 0%, var(--hell-fire) 100%);
		border-color: var(--hell-fire);
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(139, 0, 0, 0.6),
					0 0 30px rgba(255, 69, 0, 0.4);
	}

	@media (max-width: 768px) {
		.hero {
			padding: 3rem 1.5rem;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.tagline {
			font-size: 1.2rem;
			letter-spacing: 3px;
		}

		.videos {
			padding: 1.5rem 1rem;
			margin: 3rem 0;
		}

		.blog-cta {
			padding: 3rem 1.5rem;
			margin: 3rem 0;
		}

		.blog-cta h2 {
			font-size: 1.8rem;
		}

		.blog-cta p {
			font-size: 1.1rem;
		}

		.cta-button {
			padding: 1rem 2rem;
			font-size: 1rem;
			letter-spacing: 2px;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 2.5rem 1rem;
			margin-bottom: 3rem;
		}

		.hero h1 {
			font-size: 2rem;
		}

		.tagline {
			font-size: 1rem;
			letter-spacing: 2px;
		}

		.videos {
			padding: 1rem;
			margin: 2rem 0;
		}

		.blog-cta {
			padding: 2.5rem 1rem;
			margin: 2rem 0;
		}

		.blog-cta h2 {
			font-size: 1.5rem;
		}

		.blog-cta p {
			font-size: 1rem;
		}

		.cta-button {
			padding: 0.9rem 1.5rem;
			font-size: 0.9rem;
		}
	}
</style>
