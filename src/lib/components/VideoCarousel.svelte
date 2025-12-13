<script lang="ts">
	interface Video {
		id: string;
		slug: string;
		title: string;
		thumbnail: string;
	}

	interface Props {
		videos: Video[];
	}

	let { videos }: Props = $props();
	let currentIndex = $state(0);
	let playingIndex = $state<number | null>(null);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % videos.length;
		playingIndex = null; // Stop playing when sliding
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + videos.length) % videos.length;
		playingIndex = null; // Stop playing when sliding
	}

	function goToSlide(index: number) {
		currentIndex = index;
		playingIndex = null; // Stop playing when changing slides
	}

	function playVideo(index: number) {
		playingIndex = index;
	}

	function stopVideo() {
		playingIndex = null;
	}
</script>

<div class="carousel">
	<div class="carousel-inner">
		{#each videos as video, i}
			<div class="carousel-item" class:active={i === currentIndex}>
				<div class="video-container">
					{#if playingIndex === i}
						<div class="iframe-container">
							<iframe
								src={`https://player.vimeo.com/video/${video.id}?autoplay=1`}
								width="100%"
								height="100%"
								frameborder="0"
								allow="autoplay; fullscreen; picture-in-picture"
								allowfullscreen
								title={video.title}
							></iframe>
							<button class="close-video" onclick={stopVideo} aria-label="Close video">×</button>
						</div>
					{:else}
						<button class="video-preview" onclick={() => playVideo(i)}>
							<img src={video.thumbnail} alt={video.title} />
							<div class="play-overlay">
								<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
									<circle cx="40" cy="40" r="40" fill="var(--blood-red)" opacity="0.9"/>
									<path d="M32 25L58 40L32 55V25Z" fill="var(--bone-white)"/>
								</svg>
							</div>
						</button>
					{/if}
				</div>
				<div class="video-footer">
					<h3>{video.title}</h3>
					<div class="video-actions">
						<a href={`/projects/${video.slug}`} class="project-link">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="12" cy="12" r="10"/>
								<path d="M12 16v-4M12 8h.01"/>
							</svg>
							Project Info
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	{#if videos.length > 1}
		<button class="carousel-control prev" class:faded={playingIndex !== null} onclick={prevSlide} aria-label="Previous video">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<button class="carousel-control next" class:faded={playingIndex !== null} onclick={nextSlide} aria-label="Next video">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>

		<div class="carousel-indicators">
			{#each videos as _, i}
				<button
					class="indicator"
					class:active={i === currentIndex}
					onclick={() => goToSlide(i)}
					aria-label={`Go to video ${i + 1}`}
				></button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		overflow: hidden;
		border: 3px solid var(--blood-red);
		border-radius: 12px;
		background-color: var(--abyss-black);
		min-height: 500px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8),
					0 0 60px rgba(139, 0, 0, 0.3),
					inset 0 0 20px rgba(0, 0, 0, 0.5);
	}

	.carousel-inner {
		position: relative;
		width: 100%;
		height: 500px;
	}

	.carousel-item {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		pointer-events: none;
	}

	.carousel-item.active {
		opacity: 1;
		pointer-events: auto;
	}

	.video-container {
		position: relative;
		width: 100%;
		height: calc(100% - 120px);
		overflow: hidden;
		background-color: var(--abyss-black);
	}

	.video-preview {
		position: relative;
		width: 100%;
		height: 100%;
		border: none;
		padding: 0;
		background: transparent;
		cursor: pointer;
		display: block;
	}

	.video-preview img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.video-preview:hover img {
		transform: scale(1.05);
	}

	.iframe-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.iframe-container iframe {
		width: 100%;
		height: 100%;
		display: block;
	}

	.close-video {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--blood-red);
		border: 2px solid var(--bone-white);
		color: var(--bone-white);
		font-size: 30px;
		line-height: 1;
		cursor: pointer;
		z-index: 20;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		transition: all 0.3s ease;
	}

	.close-video:hover {
		background-color: var(--hell-fire);
		transform: scale(1.1);
	}

	.play-overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: transform 0.3s ease;
		pointer-events: none;
	}

	.video-preview:hover .play-overlay {
		transform: translate(-50%, -50%) scale(1.1);
	}

	.video-footer {
		background-color: var(--ash-gray);
		border-top: 2px solid var(--blood-red);
	}

	h3 {
		text-align: center;
		padding: 1rem 1rem 0.5rem;
		margin: 0;
		font-size: 1.2rem;
		color: var(--bone-white);
	}

	.video-actions {
		display: flex;
		justify-content: center;
		gap: 1rem;
		padding: 0.5rem 1rem 1rem;
		flex-wrap: wrap;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1rem;
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		border-radius: 6px;
		transition: all 0.3s ease;
		text-decoration: none;
		background: linear-gradient(135deg, var(--blood-red) 0%, var(--crimson) 100%);
		color: var(--bone-white);
		border: 2px solid var(--crimson);
	}

	.project-link:hover {
		background: linear-gradient(135deg, var(--crimson) 0%, var(--hell-fire) 100%);
		border-color: var(--hell-fire);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(139, 0, 0, 0.5);
	}

	.carousel-control {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: var(--blood-red);
		border: 3px solid var(--bone-white);
		width: 60px;
		height: 60px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 10;
		transition: all 0.3s ease, opacity 0.5s ease;
		padding: 0;
		opacity: 1;
	}

	.carousel-control.faded {
		opacity: 0.1;
	}

	.carousel-control.faded:hover {
		opacity: 0.9;
	}

	.carousel-control svg {
		width: 30px;
		height: 30px;
		stroke: var(--bone-white);
		stroke-width: 3;
	}

	.carousel-control:hover {
		background-color: var(--hell-fire);
		border-color: var(--crimson);
		transform: translateY(-50%) scale(1.15);
		box-shadow: 0 0 20px rgba(255, 69, 0, 0.6);
	}

	.carousel-control.prev {
		left: 1rem;
	}

	.carousel-control.next {
		right: 1rem;
	}

	.carousel-indicators {
		position: absolute;
		bottom: 140px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;
		z-index: 10;
	}

	.indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: rgba(224, 224, 224, 0.5);
		border: 2px solid var(--bone-white);
		cursor: pointer;
		transition: all 0.3s ease;
		padding: 0;
	}

	.indicator:hover {
		background-color: var(--hell-fire);
		transform: scale(1.2);
	}

	.indicator.active {
		background-color: var(--blood-red);
		transform: scale(1.3);
	}

	@media (max-width: 768px) {
		.carousel {
			min-height: auto;
		}

		.carousel-inner {
			height: 350px;
		}

		.video-container {
			height: calc(100% - 180px);
		}

		.carousel-control {
			width: 40px;
			height: 40px;
			top: 35%;
		}

		.carousel-indicators {
			bottom: 185px;
			gap: 0.4rem;
		}

		.indicator {
			width: 8px;
			height: 8px;
		}

		.video-footer {
			min-height: 180px;
		}

		h3 {
			font-size: 0.9rem;
			padding: 0.75rem 1rem 0.5rem;
			line-height: 1.2;
		}

		.video-actions {
			flex-direction: column;
			gap: 0.5rem;
			padding: 0.5rem 1rem 1rem;
		}

		.project-link {
			width: 100%;
			justify-content: center;
			padding: 0.75rem 1rem;
			font-size: 0.85rem;
		}
	}
</style>
