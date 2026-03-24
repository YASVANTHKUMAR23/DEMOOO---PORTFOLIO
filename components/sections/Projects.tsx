'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Aura E-Commerce',
    category: 'Fullstack Development',
    image: 'https://picsum.photos/seed/ecommerce/1200/800',
    year: '2025',
    description: 'A seamless shopping experience built with Next.js and WebGL.'
  },
  {
    title: 'Nexus Dashboard',
    category: 'UI/UX & Frontend',
    image: 'https://picsum.photos/seed/dashboard/1200/800',
    year: '2024',
    description: 'Data visualization platform with real-time analytics.'
  },
  {
    title: 'Lumina Agency',
    category: 'Creative Development',
    image: 'https://picsum.photos/seed/agency/1200/800',
    year: '2024',
    description: 'Award-winning portfolio with advanced GSAP animations.'
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.project-panel');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollContainerRef.current?.offsetWidth
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-bg overflow-hidden flex items-center relative" id="projects">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-low via-bg to-bg opacity-50 pointer-events-none" />
      
      <div className="absolute top-12 left-6 md:left-24 z-10">
        <h2 className="text-display-lg font-display font-bold text-text">
          Selected <span className="text-primary italic">works.</span>
        </h2>
      </div>

      <div ref={scrollContainerRef} className="flex w-[300vw] h-full items-center px-6 md:px-24 pt-20">
        {projects.map((project, index) => (
          <div key={index} className="project-panel w-screen flex-shrink-0 px-4 md:px-12 flex items-center justify-center">
            <div className="glass-card w-full max-w-6xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 group">
              <div className="relative aspect-video lg:aspect-auto h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg/30 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <span className="text-label text-primary mb-4">{project.category}</span>
                <h3 className="text-display-md font-display font-bold text-text mb-6">
                  {project.title}
                </h3>
                <p className="text-headline-sm font-body text-text-muted mb-10">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-outline/50">
                  <span className="text-text-muted font-mono text-lg">{project.year}</span>
                  <button className="w-14 h-14 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-500 group/btn">
                    <ArrowUpRight size={24} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
