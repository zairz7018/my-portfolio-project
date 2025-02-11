// import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { CertificationCard } from './ui/CertificationCard';

const certifications = [
  {
    title: 'Introduction to DevOps',
    issuer: 'Coursera',
    date: 'Janvier 2025',
    link: 'https://coursera.org/share/26c3ab9e3712722c6e13c92ca0a8db73',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~0VMLDHZGIB98/CERTIFICATE_LANDING_PAGE~0VMLDHZGIB98.jpeg',
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Coursera',
    date: 'November 15, 2024',
    link: 'https://coursera.org/share/6a16fc305ff612991af2734afefd8fc7',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KDBWOLZ91Z94/CERTIFICATE_LANDING_PAGE~KDBWOLZ91Z94.jpeg',
  },
  {
    title: 'Python 3 Ultimate Guide',
    issuer: 'Udemy',
    date: 'Oct 2023',
    link: 'https://www.udemy.com/certificate/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457/',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}