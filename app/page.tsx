import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { TechStackCarousel } from './components/TechStackCarousel';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-white text-gray-900">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<TechStackCarousel />
			<ContactSection />
		</main>
	);
}
