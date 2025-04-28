import React from 'react';
import Image from 'next/image';
import { SectionWithPattern } from "@/components/magicui/section-with-pattern";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const techStacks = [
  { name: 'React', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/react-light.svg' },
  { name: 'Next.js', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/nextjs-light.svg' },
  { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/typescript.svg' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/javascript.svg' },
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/nodejs-light.svg' },
  { name: 'Express', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/expressjs-light.svg' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mongodb-light.svg' },
  { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/postgressql-light.svg' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/tailwindcss-light.svg' },
  { name: 'Git', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/git-light.svg' },
  { name: 'GitHub', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/github-light.svg' },
  { name: 'Docker', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/docker-light.svg' },
  { name: 'AWS', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons%232/aws-light.svg' },
  { name: 'Python', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/python-light.svg' },
  { name: 'Java', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/java-light.svg' },
];

export const TechStackCarousel = () => {
  return (
    <SectionWithPattern id="tech-stacks" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          <TypingAnimation className="text-2xl sm:text-3xl">Tech Stacks I know.</TypingAnimation>
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-slow">
            {/* First set of icons */}
            <div className="flex space-x-12">
              {techStacks.map((tech, index) => (
                <div key={index} className="flex flex-col items-center group min-w-[80px]">
                  <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-12">
              {techStacks.map((tech, index) => (
                <div key={`duplicate-${index}`} className="flex flex-col items-center group min-w-[80px]">
                  <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithPattern>
  );
}; 