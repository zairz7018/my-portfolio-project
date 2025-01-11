// import React from 'react';
import './index.css'; // or wherever your Tailwind CSS file is located

import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Experience } from './Components/Experience';
import { Certifications } from './Components/Certifications';
import { Education } from './Components/Education';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { LoadingScreen } from './Components/loading/LoadingScreen';
import { useLoading } from './Hooks/useLoading';
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