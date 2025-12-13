<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="IndexNow-Verification" content="db21709858ef4af49277664c6eae50f9" />
</svelte:head>

<div class="layout">
	<header>
		<nav>
			<div class="logo">
				<a href="/">PIXEL <span class="slayer">SLAYER</span></a>
			</div>
			<ul class="nav-links">
				<li><a href="/">Home</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="social-links">
			<a href="https://github.com/thethrasher666" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
				</svg>
			</a>
			<a href="https://www.linkedin.com/in/thethrasher666/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
				</svg>
			</a>
		</div>
		<p>&copy; 2024-{new Date().getFullYear()} Jamie Kenyon. All rights reserved.</p>
	</footer>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		background: linear-gradient(180deg, rgba(26, 26, 26, 0.98) 0%, rgba(26, 26, 26, 0.95) 100%);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 3px solid var(--blood-red);
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7), 0 0 40px rgba(139, 0, 0, 0.3);
		width: 100%;
		box-sizing: border-box;
	}

	nav {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo a {
		font-size: 1.8rem;
		font-weight: 900;
		letter-spacing: 3px;
		color: var(--hell-fire);
		text-shadow: 2px 2px 4px var(--blood-red);
		transition: all 0.3s ease;
	}

	.logo a:hover {
		color: var(--crimson);
		text-shadow: 2px 2px 8px var(--hell-fire);
	}

	.logo .slayer {
		font-style: italic;
		transform: skewX(-10deg);
		display: inline-block;
		letter-spacing: 4px;
		font-weight: 900;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	.nav-links a {
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 0.5rem 1rem;
		border: 2px solid transparent;
		transition: all 0.3s ease;
	}

	.nav-links a:hover {
		border-color: var(--blood-red);
		background-color: rgba(139, 0, 0, 0.2);
	}

	main {
		flex: 1;
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
		padding: 3rem 2rem;
	}

	footer {
		background: linear-gradient(0deg, rgba(26, 26, 26, 0.98) 0%, rgba(26, 26, 26, 0.95) 100%);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-top: 3px solid var(--blood-red);
		text-align: center;
		padding: 2rem 1.5rem;
		color: var(--bone-white);
		margin-top: 4rem;
		box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 1rem;
	}

	.social-links a {
		color: var(--bone-white);
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.social-links a:hover {
		color: var(--hell-fire);
		transform: scale(1.2);
	}

	.social-links svg {
		width: 32px;
		height: 32px;
	}

	@media (max-width: 768px) {
		header {
			width: 100vw;
			position: relative;
			left: 50%;
			right: 50%;
			margin-left: -50vw;
			margin-right: -50vw;
		}

		nav {
			flex-direction: column;
			gap: 1rem;
			padding: 1rem 3rem;
			max-width: none;
			width: 100%;
			margin: 0;
		}

		.logo a {
			font-size: 1.5rem;
		}

		.nav-links {
			gap: 0.5rem;
		}

		main {
			padding: 2rem 1rem;
		}

		.social-links svg {
			width: 28px;
			height: 28px;
		}
	}

	@media (max-width: 480px) {
		.logo a {
			font-size: 1.3rem;
			letter-spacing: 2px;
		}

		.nav-links a {
			font-size: 1rem;
		}

		main {
			padding: 1.5rem 1rem;
		}
	}
</style>
