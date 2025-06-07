import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { TechStackCarousel } from './components/TechStackCarousel';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';

export default function WebDeveloperPortfolio() {
	return (
		<ThemeProvider>
			<div className="relative min-h-screen">
				{/* Background Effects */}
				<div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
				<div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10" />
				<div className="fixed inset-0 bg-grid-pattern opacity-5 -z-10" />
				
				{/* Main Content */}
				<Navbar />
				<main className="relative">
					<div id="home" className="scroll-mt-20">
						<HeroSection />
					</div>
					<div id="skills" className="scroll-mt-20">
						<SkillsSection />
					</div>
					<div id="work" className="scroll-mt-20">
						<ProjectsSection />
					</div>
					<div className="scroll-mt-20">
						<TechStackCarousel />
					</div>
					<div id="contact" className="scroll-mt-20">
						<ContactSection />
					</div>
				</main>

				{/* Footer */}
				<footer className="py-8 text-center text-gray-600 dark:text-gray-400">
					<p>© {new Date().getFullYear()} Khushi Gusain. All rights reserved.</p>
				</footer>
			</div>
		</ThemeProvider>
	);
}
