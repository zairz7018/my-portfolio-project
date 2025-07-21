// import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Développeur Full Stack – Stage',
    company: 'Atlanta Sanad',
    period: 'Avr. 2025 - Juin 2025',
    description: 'Conçu et développé un portail d’emploi complet pour automatiser les candidatures, le suivi des candidats et la gestion des offres.',
  },
  {
    title: 'Agent Mailler',
    company: 'Digital Aigle',
    period: 'Déc. 2023 - Juin 2024',
    description: 'Gestion des campagnes d’email marketing, configuration SMTP et mise en place de SPF, DKIM et DMARC.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}