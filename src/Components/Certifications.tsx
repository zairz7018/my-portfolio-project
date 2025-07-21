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
    title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    issuer: 'Coursera',
    date: 'February 16, 2025',
    link: 'https://coursera.org/share/4c49af10a8f6401c5850a17ceefc5cc4',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~H2LKE3YQZ2HZ/CERTIFICATE_LANDING_PAGE~H2LKE3YQZ2HZ.jpeg',
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