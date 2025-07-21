// import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'EliteHire (Frontend)',
    description: 'Modern job portal interface allowing candidates to build rich profiles and apply for jobs.',
    image: '/assets/Asset1.png',
    link: '###',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'EliteHire (Backend)',
    description: 'Robust backend API built with Spring Boot handling authentication, job offers, and candidate management',
    image: '/assets/Asset2.png',
    link: 'https://github.com/zairz7018/job-Portal-Backend',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'JWT'],
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing full-stack projects and technical skills.',
    image: '/assets/Portfolio1.png',
    link: 'https://github.com/zairz7018/job-portal',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}