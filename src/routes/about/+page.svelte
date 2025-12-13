<script lang="ts">
	const siteUrl = 'https://www.pixel-slayer.com';
</script>

<svelte:head>
	<title>About Jamie Kenyon - Performance Critical Graphics Engineer</title>
	<meta name="description" content="Jamie Kenyon is a performance critical graphics engineer specializing in VFX tools. With 12 years in visual effects and roots in homebrew console development, he's contributed to Foundry's Mari, Modo, Katana, and Pixar's USD." />
	<meta name="author" content="Jamie Kenyon" />
	<link rel="canonical" href="{siteUrl}/about" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="{siteUrl}/about" />
	<meta property="og:title" content="About Jamie Kenyon - Game Developer & Software Engineer" />
	<meta property="og:description" content="Game developer and software engineer specializing in VFX tools and game development. Worked on The Persistence, InviZimals, and the Buzz! Junior series." />
	<meta property="og:site_name" content="Pixel Slayer" />
</svelte:head>

<article class="about-page">
	<header class="page-header">
		<h1>About Jamie Kenyon</h1>
		<p class="lead">Performance Critical Graphics Engineer • VFX Solutions Developer • Thrash Metal Enthusiast</p>
	</header>

	<div class="content">
		<section class="bio">
			<h2>Background</h2>
			<p>
				I'm a performance critical graphics engineer specializing in VFX tools, where I've been working 
				for the last 12 years. My journey in programming began long before that—cutting my teeth on Assembly 
				language doing homebrew development for consoles like the Sega Megadrive/Genesis. Back when you had 
				to manually optimize every instruction and knew exactly what the CPU was doing.
			</p>
			<p>
				The games industry is long behind me now, but it's where I learned my craft. I spent years at Sony 
				Computer Entertainment working on the PlayStation platform, contributing to titles like The Persistence, 
				InviZimals: The Lost Kingdom, Disney Th!nk Fast, and the Buzz! Junior series. Those countless years 
				of homebrew console development and game programming taught me the fundamentals of performance-critical 
				code that I still apply every day in VFX.
			</p>
		</section>

		<section class="expertise">
			<h2>Expertise</h2>
			<div class="skills-grid">
				<div class="skill-category">
					<h3>VFX Tools Development</h3>
					<ul>
						<li>Foundry Mari (3D Painting)</li>
						<li>Foundry Modo (3D Modeling)</li>
						<li>Foundry Katana (Look Development)</li>
						<li>Pixar USD (Universal Scene Description)</li>
					</ul>
				</div>
				<div class="skill-category">
					<h3>Core Skills</h3>
					<ul>
						<li>Graphics Programming / C++ / C</li>
						<li>Graphics Programming / C++ / C / Assembly</li>
						<li>Graphics Programming / C++ / C</li>
						<li>C++ / Posix / Win32</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="philosophy">
			<h2>Philosophy</h2>
			<p>
				I believe in understanding systems at a fundamental level. Whether it's optimizing a rendering 
				pipeline in a VFX tool or squeezing every last cycle out of a Megadrive, I approach problems with 
				the precision of Assembly programming and the creative energy of thrash metal.
			</p>
			<p>
				Performance isn't just about making things fast—it's about understanding the hardware, the data flow, 
				and the architecture at every level. When I'm not optimizing critical paths in VFX software, you'll 
				find me listening to Slayer and Exodus, two bands that embody the same relentless precision and raw 
				power that I strive for in my work.
			</p>
		</section>

		<section class="connect">
			<h2>Connect</h2>
			<p>Want to collaborate or just talk shop about performance-critical graphics engineering and VFX tools?</p>
			<div class="social-links">
				<a href="https://github.com/jamiekenyon" target="_blank" rel="noopener noreferrer" class="social-link">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
					GitHub
				</a>
				<a href="https://www.linkedin.com/in/jamiekenyon" target="_blank" rel="noopener noreferrer" class="social-link">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
					</svg>
					LinkedIn
				</a>
			</div>
		</section>
	</div>
</article>

<style>
	.about-page {
		max-width: 900px;
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

	.lead {
		font-size: 1.3rem;
		color: var(--bone-white);
		opacity: 0.9;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	section {
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 26, 26, 0.8) 100%);
		padding: 2.5rem;
		border: 2px solid var(--blood-red);
		border-radius: 12px;
		backdrop-filter: blur(8px);
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--hell-fire);
		border-bottom: 2px solid var(--crimson);
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		color: var(--hell-fire);
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--bone-white);
		margin-bottom: 1.2rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 1.5rem;
	}

	.skill-category ul {
		list-style: none;
		padding: 0;
	}

	.skill-category li {
		padding: 0.7rem 0;
		color: var(--bone-white);
		border-bottom: 1px solid rgba(139, 0, 0, 0.3);
		font-size: 1rem;
	}

	.skill-category li:last-child {
		border-bottom: none;
	}

	.social-links {
		display: flex;
		gap: 1.5rem;
		margin-top: 1.5rem;
		flex-wrap: wrap;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
		padding: 0.8rem 1.5rem;
		background: linear-gradient(135deg, var(--blood-red) 0%, var(--crimson) 100%);
		color: var(--bone-white);
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.3s ease;
		border: 2px solid var(--crimson);
	}

	.social-link:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(139, 0, 0, 0.6);
		border-color: var(--hell-fire);
		background: linear-gradient(135deg, var(--crimson) 0%, var(--hell-fire) 100%);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}

		.lead {
			font-size: 1.1rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		section {
			padding: 1.5rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
