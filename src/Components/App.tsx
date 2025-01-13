// import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Certifications } from './Certifications';
import { Education } from './Education';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { LoadingScreen } from './loading/LoadingScreen';
import { useLoading } from '../Hooks/useLoading';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div
        className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
        <Analytics /> {/* Add Analytics here */}
      </div>
    </>
  );
}

export default App;