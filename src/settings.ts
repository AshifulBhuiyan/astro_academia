export const profile = {
	fullName: 'Ashiful Bhuiyan',
	title: '',
	institute: '',
	author_name: 'Ashiful Bhuiyan', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: 'Physics', description: 'Theoretical and Computational study with a focus on General relativity, High Energy Physics, and Statistical Mechanics.', field: 'physics' },
		 { title: 'Math', description: 'Chaotic Systems, Combinatorics, Functional Analysis, Numerical Analysis, Number Theory', field: 'engineering'},
		 { title: 'Data Science', description: 'Machine Learning, Artificial Intelligence, Deep Reinforcement Learning and Model Optimization', field: 'computer-science'},

	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'ashiful@conquestace.com',
	linkedin: '',
	bluesky: 'https://bsky.app/profile/conquestace.bsky.social',
	github: 'https://github.com/ashifulbhuiyan',
	huggingface:'https://huggingface.co/ConquestAce/',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Ashiful Bhuiyan',
	default_description: 'Portfolio.',
	default_image: '/images/astro-academia.png',
}
