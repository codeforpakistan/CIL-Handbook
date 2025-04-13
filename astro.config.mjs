// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
					
				},
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Understanding Civic Tech', slug: 'guides/civic-tech' },
						{ label: 'Technical Communities', slug: 'guides/tech-community' },
						{ label: 'Civic Tech for Government Services', slug: 'guides/gov-services' },
						{ label: 'Civic Tech Communities and Governments', slug: 'guides/community-gov' },
					],
				},
				
				{
					label: 'Civic Engagement',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Civic Engagement', slug: 'guides/civic-engagement' },
						{ label: 'Civic Tech Project', slug: 'guides/civic-project' },
					],
					
				},

				{
					label: 'Human Centered Design',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Human Centered Design', slug: 'guides/hcd-system' },
						{ label: 'Importance of Human-Centered Design', slug: 'guides/hcd-importance' },
						{ label: 'Principles of Human-Centered Design', slug: 'guides/hcd-principles' },
						{ label: 'Phases of Human-Centered Design', slug: 'guides/hcd-phases' },
						{ label: 'Process of Human-Centered Design', slug: 'guides/hcd-process' },
						{ label: 'Designs That Work for Everyone', slug: 'guides/designs-for-everyone' },
						{ label: 'Examples of Human Centered Design', slug: 'guides/hcd-examples' },
						{label: 'Design thinking vs HCD', slug: 'guides/design-thinking-vs-hcd'},
					],
					
				},
					
				{
					label: 'Design Thinking',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Design Thinking', slug: 'guides/design-thinking' },
						{ label: 'How to Think Like a Designer', slug: 'guides/think-like-designer' },
						{ label: 'Design Thinking Process', slug: 'guides/design-thinking-process' },
						{ label: 'IDEO design thinking Steps', slug: 'guides/ideo-steps' },
					],
					
				},

				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
