'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: '2023',
    image: 'https://picsum.photos/seed/cert1/800/600',
  },
  {
    title: 'Google Cloud Certified Professional',
    issuer: 'Google',
    date: '2024',
    image: 'https://picsum.photos/seed/cert2/800/600',
  },
  {
    title: 'UI/UX Design Specialization',
    issuer: 'Coursera',
    date: '2022',
    image: 'https://picsum.photos/seed/cert3/800/600',
  },
];

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = listRef.current?.children;
      if (items) {
        gsap.from(items, {
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-surface-low" id="certificates">
      <div className="container mx-auto px-6">
        <h2 className="text-display-lg font-display font-bold text-text mb-16 text-center">
          Professional <span className="text-primary italic">certifications.</span>
        </h2>

        <ul ref={listRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <li key={index} className="group relative overflow-hidden rounded-lg bg-surface border border-outline p-6 hover:border-primary/50 transition-colors duration-300">
              <div className="relative w-full aspect-video rounded-md overflow-hidden mb-6">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-label text-primary">{cert.issuer}</span>
                <h3 className="text-headline-md font-display font-bold text-text group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <span className="text-text-muted font-mono mt-2">{cert.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
