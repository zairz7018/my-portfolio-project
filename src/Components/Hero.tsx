// import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfos';
import { ActionButtons } from './hero/ActionButtons';

export function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Front-End Enthusiast",
    "Problem Solver",
    "Content Creator",
    "Tech Innovator",
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-8 py-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                Hey! 👋 I'm
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                ZAKARYA ZAIR
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 md:order-2">
            {/* Floating solid circular elements */}
            <div className="absolute w-24 h-24 bg-blue-600 top-0 left-0 rounded-full animate-floating" />
            <div className="absolute w-24 h-24 bg-purple-600 bottom-0 right-0 rounded-full animate-floating delay-150" />
            <div className="absolute w-20 h-20 bg-green-500 top-4 right-4 rounded-full animate-floating delay-300" />
            <div className="absolute w-20 h-20 bg-yellow-500 bottom-4 left-4 rounded-full animate-floating delay-450" />

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="/assets/Profile4.jpg"
              alt="Zakarya zair"
              className="relative w-full max-w-lg mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
