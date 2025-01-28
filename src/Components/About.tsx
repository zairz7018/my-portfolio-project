// import React from 'react';
import { Code2, Brain, Trophy, Rocket } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { AboutCard } from './About/AboutCard';
import { Stats } from './About/Stats';

export function About() {
  const cards = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Specialized in MERN stack with TypeScript, building scalable web applications.',
      color: 'bg-blue-600',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Strong DSA background with competitive programming experience.',
      color: 'bg-purple-600',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Multiple certifications and academic excellence in computer science.',
      color: 'bg-green-600',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Passionate about creating innovative solutions to complex problems.',
      color: 'bg-orange-600',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-8 relative">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a motivated Full-Stack Developer and final-year student in Licence Professionnelle en Informatique et Mathématiques Appliquées, passionate about building efficient and scalable web solutions. With a solid foundation in web development technologies like ReactJS, PHP, Laravel, and MySQL, I approach each project with a focus on creating high-quality, user-friendly applications. My experience with agile methodologies such as Kanban and Scrum enhances my problem-solving mindset and enables me to deliver impactful results.
            </p>
          </div>

          <Stats />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}