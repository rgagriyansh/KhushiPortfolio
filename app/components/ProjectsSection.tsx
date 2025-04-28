import React from 'react';
import Image from 'next/image';
import { Tree } from "@/components/magicui/file-tree";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SectionWithPattern } from "@/components/magicui/section-with-pattern";

export const ProjectsSection = () => {
	return (
		<SectionWithPattern id="work" className="scroll-mt-20">
			<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
				Featured <TypingAnimation className="text-2xl sm:text-3xl">Projects</TypingAnimation>
			</h2>
			<div className="space-y-8 sm:space-y-12">
				{[
					{
						title: 'Dynamic Blog Post Generator',
						description: 'Created a dynamic blog post system that generates new blog pages with unique slugs and rich text formatting for Ezlearn.in/[slug].',
						techDetails: [
							'Dynamic Route Handling in Next.js',
							'Rich Text Editor Integration',
							'SEO Optimization for each blog page',
							'API integration for blog creation and editing',
						],
						image: '/code.jpg',
						github: 'https://github.com/yourusername/blog-generator',
						website: 'https://ezlearn.in',
					},
					{
						title: 'Dsaverse',
						description: 'Developed a platform for students to track their DSA progress with AI-powered personalized roadmaps and real-time performance analysis.',
						techDetails: [
							'Student Progress Tracker',
							'AI Integration for Roadmap Suggestions',
							'Real-time Data Sync',
							'Personalized Dashboard Design',
						],
						image: '/code.jpg',
						github: 'https://github.com/yourusername/dsaverse',
						website: 'https://dsaverse.com',
					},
					{
						title: 'TaskHive',
						description: 'Built a SaaS platform for project and task management with real-time collaboration, Kanban boards, and AI-powered data queries.',
						techDetails: [
							'Drag-and-Drop Kanban Board (Priority and Status based)',
							'Multi-user Project Collaboration',
							'AI Chat Integration for Project & Task Data Queries',
							'Real-time Project Status Updates',
						],
						image: '/code.jpg',
						github: 'https://github.com/yourusername/taskhive',
						website: 'https://taskhive.com',
					},
				].map((project, idx) => (
					<div key={project.title} className="relative">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
								<h3 className="text-xl sm:text-2xl font-bold text-gray-900">
									<TypingAnimation className="text-xl sm:text-2xl" startOnView>{project.title}</TypingAnimation>
								</h3>
								<p className="text-sm sm:text-base text-gray-600">{project.description}</p>
								<div>
									<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">
										Project <TypingAnimation className="text-base sm:text-lg" startOnView>Files</TypingAnimation>
									</h4>
									<div className="bg-white/20 backdrop-blur-sm rounded-md p-4">
										<Tree
											elements={[
												{
													id: `project-${idx}`,
													name: `${project.title.replace(/\s/g, '')}/`,
													children: [
														{
															id: `features-${idx}`,
															name: 'Features/',
															children: project.techDetails.map((feature, featureIdx) => ({
																id: `feature-${idx}-${featureIdx}`,
																name: feature,
															})),
														},
														{
															id: `readme-${idx}`,
															name: 'README.md',
														},
													],
												},
											]}
										/>
									</div>
								</div>
								<div className="flex gap-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer">
										<InteractiveHoverButton className="bg-gray-800/80 text-white hover:bg-gray-700">
											GitHub
										</InteractiveHoverButton>
									</a>
									<a href={project.website} target="_blank" rel="noopener noreferrer">
										<InteractiveHoverButton className="bg-blue-600/80 text-white hover:bg-blue-500">
											Website
										</InteractiveHoverButton>
									</a>
								</div>
							</div>
							<div className="relative h-full min-h-[300px] lg:min-h-full">
								<Image src={project.image} alt={project.title} fill className="object-cover rounded-lg" sizes="(max-width: 1024px) 100vw, 50vw" />
								<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-transparent"></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</SectionWithPattern>
	);
};
