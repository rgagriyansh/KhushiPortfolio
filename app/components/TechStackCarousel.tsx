"use client";

import React from 'react';
import Image from 'next/image';
import { SectionWithPattern } from "@/components/magicui/section-with-pattern";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
            <TypingAnimation className="text-2xl sm:text-3xl">Tech Stacks I know.</TypingAnimation>
          </h2>
        </motion.div>
        
        <div className="relative w-full overflow-hidden py-8">
          <div className="flex animate-scroll-slow">
            {/* First set of icons */}
            <div className="flex space-x-12">
              {techStacks.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center group min-w-[80px]"
                >
                  <div className="w-16 h-16 relative transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative w-full h-full p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-12">
              {techStacks.map((tech, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center group min-w-[80px]"
                >
                  <div className="w-16 h-16 relative transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative w-full h-full p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWithPattern>
  );
}; 