
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Sydney Parker",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Welcome! I'm Sydney!",
	description: "UX/UI Designer • Frontend Developer • Technical Writer",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/18QrcCdhRJ-VwDUWsfALm-MTTtfTWg61FFMmT0JCwjig/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me",
	description: [
		"I'm a 23-year-old from Washington, DC. I attend George Mason University, where I'm earning my B.S. in Applied Computer Science with a concentration in Software Engineering in May 2022.",
		"My career trajectory involves bridging the divide between sensible design and intuitive usability. I seek to combine my interests in frontend web development, user psychology, and digital design into a fruitful UX design career.",
		"When I’m not programming, I focus on makeup artistry, music production, and creative writing. I also love to participate in designathons to keep my UX/UI skills fresh and challenged!",
	],
}

export const work = {
	title: "About My Work",
	cards: [
		{
			title: "UX/UI Design",
			description: "I turn wireframes and sketches into high-fidelity prototypes using Adobe XD.",
			icons: null,
		},
		{
			title: "Frontend Development",
			description: "I create responsive static websites using React.",
			icons: null,
		}
	],
}


export const projects = {
	title: "Projects",
	cards: [
		{
			title: "FloorSeats",
			description: "A entertainment-streaming app that allows viewers to host virtual watch parties.",
			icons: [
				{
					icon: faGithub,
					link: "https://xd.adobe.com/view/850763bb-020a-435a-8dae-7a004b89822c-d054/screen/41a1e29d-728b-4383-81c4-54ba9e85454b",
				},
			]
		},
	],
}

export const contact = {
	title: "Contact Me",
	description: "Feel free to contact me below or directly at sparker7878@gmail.com",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:sparker7878@gmail.com",
			isPrimary: true,
		}
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "Sydney Parker • UX/UI Design • Frontend Development",
	description: "I specialize in UX/UI design and frontend web development.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Sydney Parker",
	description: "UX/UI Design • Frontend Development",
	cards: [
		{
			title: "Website",
			link: "https://sparker7878.github.io/portfolio",
		},
		{
			title: "GitHub",
			link: "https://github.com/sparker7878/",
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/sydney-parker-uxui/",
		},
	]
}
