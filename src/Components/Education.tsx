// import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Licence Professionnelle en Informatique et Mathématiques Appliquées (IMA)',
    institution: 'FACULTÉ POLYDISCIPLINAIRE SIDI BENNOUR, Université Chouaib Doukkali, El Jadida',
    period: '2024 – 2025',
    score: '80%',
  },
  {
    degree: 'Diplôme de Formation en Présentiel – Codeur Web',
    institution: 'INSTITUT SUPÉRIEUR DES SCIENCES DE L\'ÉDUCATION ET DU MANAGEMENT (ISSEM), El Jadida',
    period: '2023 – 2024',
    score: '80%',
  },
  {
    degree: 'Diplôme Technicien Spécialisé en Développement Digital – Option Web Full Stack',
    institution: 'INSTITUT SPÉCIALISÉ DE TECHNOLOGIE APPLIQUÉE (ISTA), El Jadida',
    period: '2021 – 2023',
    score: '90%',
  },
  {
    degree: 'Baccalauréat en Sciences Physiques',
    institution: 'LYCÉE OKBAH BNO NAFII, Bir Jdid – Casablanca-Settat',
    period: '2017 – 2020',
    score: '65%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}