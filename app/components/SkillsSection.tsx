import React from 'react';
import { TimelineTerminal } from '@/components/TimelineTerminal';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SectionWithPattern } from "@/components/magicui/section-with-pattern";

export const SkillsSection = () => {
	return (
		<SectionWithPattern id="skills" className="scroll-mt-20">
			<div className="max-w-6xl mx-auto relative">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900">
					<TypingAnimation className="text-2xl sm:text-3xl">Technical Expertise</TypingAnimation>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					{[
						{
							category: 'Frontend Development',
							skills: [
								{ name: 'React.js', level: 90, icon: '⚛️' },
								{ name: 'Next.js', level: 88, icon: '🚀' },
								{ name: 'Tailwind CSS', level: 92, icon: '🎨' },
							],
							color: 'from-blue-500 to-blue-600',
							bgColor: 'bg-blue-50/80',
							icon: '🚀',
						},
						{
							category: 'Backend Development & APIs',
							skills: [
								{ name: 'Node.js', level: 90, icon: '🖥️' },
								{ name: 'Express.js', level: 88, icon: '⚡' },
								{ name: 'RESTful APIs', level: 92, icon: '🔌' },
							],
							color: 'from-green-500 to-green-600',
							bgColor: 'bg-green-50/80',
							icon: '⚡',
						},
						{
							category: 'Databases',
							skills: [
								{ name: 'MongoDB', level: 90, icon: '🗄️' },
								{ name: 'PostgreSQL', level: 85, icon: '📊' },
								{ name: 'DynamoDB', level: 80, icon: '⚡' },
							],
							color: 'from-purple-500 to-purple-600',
							bgColor: 'bg-purple-50/80',
							icon: '🔥',
						},
						{
							category: 'Cloud & DevOps',
							skills: [
								{ name: 'AWS', level: 82, icon: '☁️' },
								{ name: 'Docker', level: 80, icon: '🐳' },
							],
							color: 'from-orange-500 to-orange-600',
							bgColor: 'bg-orange-50/80',
							icon: '☁️',
						},
					].map((category) => (
						<div
							key={category.category}
							className={`${category.bgColor} backdrop-blur-sm rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-lg group`}
						>
							<div className="flex items-center gap-4 mb-6">
								<div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
									{category.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
									<TypingAnimation className="text-xl" startOnView>{category.category}</TypingAnimation>
								</h3>
							</div>

							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name} className="group/skill">
										<div className="flex items-center justify-between mb-1">
											<div className="flex items-center gap-2">
												<span className="text-lg">{skill.icon}</span>
												<span className="text-sm font-medium text-gray-700 group-hover/skill:text-gray-900 transition-colors">
													{skill.name}
												</span>
											</div>
											<span className="text-sm font-medium text-gray-500">{skill.level}%</span>
										</div>
										<div className="h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
												style={{
													width: `${skill.level}%`,
													animation: 'progress 1.5s ease-out forwards',
												}}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Timeline Terminal Section */}
				<div className="mt-16">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
						<TypingAnimation className="text-2xl sm:text-3xl" startOnView>My Journey</TypingAnimation>
					</h2>
					<div className="w-full max-w-4xl mx-auto px-4">
						<div className="aspect-[16/9]">
							<TimelineTerminal />
						</div>
					</div>
				</div>
			</div>
		</SectionWithPattern>
	);
};
