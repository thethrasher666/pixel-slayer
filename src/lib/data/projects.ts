export interface Project {
	slug: string;
	vimeoId?: string;
	youtubeId?: string;
	name: string;
	year: number;
	platforms: string[];
	metacriticUrl?: string;
	description: string[];
}

export const projects: Project[] = [
	{
		slug: 'foundry-mari',
		youtubeId: 'jFVUhfSrKNY',
		name: 'Foundry Mari',
		year: 2025,
		platforms: ['Windows', 'Linux', 'macOS'],
		metacriticUrl: 'https://www.foundry.com/products/mari',
		description: [
			'Mari is a professional 3D paint tool used in visual effects and game development. Placeholder description - update with actual details about your work on Mari.',
			'Developed by The Foundry, Mari excels at handling extremely high-resolution textures and complex 3D models with millions of polygons. The software has been used in major film productions including The Hobbit, Avatar, and various Marvel Cinematic Universe films. Its layer-based workflow and ability to paint directly onto 3D models makes it an industry standard for texture artists in VFX, animation, and AAA game development.'
		]
	},
	{
		slug: 'foundry-modo',
		youtubeId: 'bJAPctMcQdQ',
		name: 'Foundry Modo',
		year: 2019,
		platforms: ['Windows', 'Linux', 'macOS'],
		description: [
			'Modo is a powerful 3D modeling, texturing, and rendering application. Placeholder description - update with actual details about your work on Modo.',
			'Acquired by The Foundry in 2012, Modo combines advanced polygon and subdivision surface modeling with integrated sculpting, UV editing, painting, and rendering capabilities. Its procedural modeling system and direct modeling tools have made it popular in industries ranging from product design and architecture to game development and visual effects. Modo\'s efficient workflow and artist-friendly interface have earned it adoption at studios worldwide.'
		]
	},
	{
		slug: 'pixar-usd',
		youtubeId: 'tH9_JaZs3-E',
		name: 'Universal Scene Description (USD)',
		year: 2016,
		platforms: ['Windows', 'Linux', 'macOS'],
		description: [
			'Universal Scene Description (USD) is an open-source framework for efficiently describing and composing 3D graphics data. Placeholder description - update with actual details about your work on USD.',
			'Originally developed by Pixar Animation Studios and released as open source in 2016, USD has become a critical interchange format for 3D content across the entertainment industry. It enables large-scale collaboration by allowing artists to assemble, organize, and augment 3D data non-destructively. Major software vendors including Autodesk, Adobe, Nvidia, and Apple have adopted USD, making it the de facto standard for 3D content pipelines in film, games, and emerging real-time applications.'
		]
	},
	{
		slug: 'foundry-katana',
		youtubeId: '4nnLzMXKFf4',
		name: 'Foundry Katana',
		year: 2015,
		platforms: ['Windows', 'Linux'],
		description: [
			'Katana is a powerful node-based look development and lighting tool for visual effects and animation. Placeholder description - update with actual details about your work on Katana.',
			'Originally developed at Sony Pictures Imageworks and acquired by The Foundry in 2009, Katana provides a flexible node-based architecture for building complex lighting and rendering workflows. It offers powerful scene graph manipulation, procedural workflows, and seamless integration with industry-standard renderers including RenderMan, Arnold, and V-Ray. Katana has been used on numerous Academy Award-winning films and is trusted by major VFX studios worldwide for its scalability in handling massive production scenes.'
		]
	},	
	{
		slug: 'the-persistence-complete-edition',
		vimeoId: '1010915239',
		name: 'The Persistence - Complete Edition',
		year: 2020,
		platforms: ['PS4', 'PS VR', 'Xbox One', 'Nintendo Switch', 'PC'],
		metacriticUrl: 'https://www.metacritic.com/game/the-persistence/',
		description: [
			'The Persistence is a first-person survival horror roguelike set onboard a doomed colony starship in the year 2057. Players take control of security officer Zimri Eder, fighting to restore power and escape while battling hordes of mutated crew members. The game features procedurally generated ship layouts that change with each death, creating a unique experience every time.',
			'Originally released as a PlayStation VR exclusive in 2018, the Complete Edition expanded to multiple platforms with both VR and traditional controller support. The game blends stealth gameplay with strategic combat, offering weapons like the Harvester taser and Gravometric Hook gravity gun. With roguelike elements including permanent upgrades and randomized encounters, The Persistence delivers intense sci-fi horror inspired by classics like Dead Space and Alien.'
		]
	},
	{
		slug: 'invizimals-the-lost-kingdom',
		vimeoId: '543967926',
		name: 'InviZimals: The Lost Kingdom',
		year: 2013,
		platforms: ['PS3'],
		metacriticUrl: 'https://www.metacritic.com/game/invizimals-the-lost-kingdom',
		description: [
			'InviZimals: The Lost Kingdom marked the franchise\'s debut on PlayStation 3, transitioning from the PSP\'s augmented reality format to a full console action-adventure experience. Part of Sony\'s popular InviZimals franchise that spawned an animated series, trading cards, and toys across Europe, the game immerses players in a world of collectible creatures and epic battles.',
			'Released simultaneously with InviZimals: The Alliance on PS Vita, The Lost Kingdom featured cross-play multiplayer connectivity between the two platforms. The franchise became a massive hit in Europe, selling millions of units and inspiring a 26-episode animated series produced by BRB International. With its creature-collection gameplay and family-friendly action, InviZimals established itself as a cornerstone of PlayStation\'s younger audience offerings.'
		]
	},
	{
		slug: 'disney-think-fast',
		vimeoId: '543967893',
		name: 'Disney Th!nk Fast',
		year: 2008,
		platforms: ['PS2', 'Wii'],
		metacriticUrl: 'https://www.metacritic.com/game/disney-th-nk-fast/',
		description: [
			'Disney Th!nk Fast is a family-friendly trivia game show experience featuring over 5,000 questions about Disney movies and general knowledge. Hosted by Genie from Aladdin, the game supports up to four players competing as classic Disney characters including Mickey Mouse, Donald Duck, Goofy, and more across 15 exciting rounds of mini-games and challenges.',
			'The game features 16 unique mini-games spanning Memory and Strategy, Speed and Agility, and Trivia and Knowledge categories. Players explore four themed stages including Ocean Grotto, Regent\'s Park, Hawaiian Beach, and The Pridelands. The PlayStation 2 version came bundled with Buzz! buzzers, while the Wii version utilized motion controls for an interactive quiz show experience perfect for family game nights.'
		]
	},
	{
		slug: 'buzz-junior-monster-rumble',
		vimeoId: '543967847',
		name: 'Buzz! Junior: Monster Rumble',
		year: 2007,
		platforms: ['PS2'],
		metacriticUrl: 'https://www.metacritic.com/game/buzz-junior-monster-rumble',
		description: [
			'Buzz! Junior: Monster Rumble is the third installment in the Buzz! Junior series, a spin-off franchise designed specifically for younger players. Released in November 2007, the game features 25 mini-games set in a monster-themed world where players compete using the iconic Buzz! buzzers.',
			'Part of the award-winning Buzz! franchise that sold over 10 million copies, Monster Rumble offers accessible party game fun for families. The Buzz! Junior series maintained the same easy-to-use buzzer controllers as the main series while tailoring the content and difficulty for children, making it perfect for birthday parties and family gatherings.'
		]
	},
	{
		slug: 'buzz-junior-robojam',
		vimeoId: '543967064',
		name: 'Buzz! Junior: RoboJam',
		year: 2007,
		platforms: ['PS2'],
		metacriticUrl: 'https://www.metacritic.com/game/buzz-junior-robojam/',
		description: [
			'Buzz! Junior: RoboJam is the second entry in the Buzz! Junior series, released in May 2007. Featuring robot characters and 25 mini-games (24 in North America), this installment was the first Buzz! Junior title developed by Cohort Studios for both PlayStation 2 and PlayStation 3.',
			'The game continues the family-friendly party game tradition with its accessible gameplay designed for children. Using the simple Buzz! buzzer controllers with their distinctive large red buzzer button and four colored answer buttons, RoboJam provides hours of competitive fun for young players and families looking for entertaining multiplayer experiences.'
		]
	},
	{
		slug: 'buzz-junior-jungle-party',
		vimeoId: '543966394',
		name: 'Buzz! Junior: Jungle Party',
		year: 2006,
		platforms: ['PS2'],
		metacriticUrl: 'https://www.metacritic.com/game/buzz-junior-jungle-party',
		description: [
			'Buzz! Junior: Jungle Party launched the Buzz! Junior spin-off series in October 2006, bringing the beloved Buzz! buzzer gameplay to a younger audience. The game features 40 mini-games (25 in the United States version) set in an exciting jungle theme, offering varied challenges perfect for children and family play.',
			'As the inaugural title in a series that would span five games, Jungle Party established the formula for accessible, buzzer-based party gaming for kids. Developed by Magenta Software and published by Sony Computer Entertainment, the game was part of the broader Buzz! phenomenon that revolutionized social gaming on PlayStation consoles and won multiple BAFTA awards.'
		]
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find(p => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
	return projects.findIndex(p => p.slug === slug);
}
