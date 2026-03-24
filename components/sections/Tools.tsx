'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js', 'WebGL', 'Node.js', 'GraphQL', 'Figma', 'Adobe CC'
];

export function Tools() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-bg overflow-hidden border-y border-outline" id="tools">
      <div className="container mx-auto px-6 mb-16">
        <h2 ref={textRef} className="text-display-lg font-display font-bold text-text text-center">
          My <span className="text-primary italic">arsenal.</span>
        </h2>
      </div>

      <div className="marquee-container py-8 bg-surface-low border-y border-outline transform -rotate-2 scale-110">
        <div className="marquee-content">
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <span key={index} className="text-display-md font-display font-bold text-text-muted hover:text-primary transition-colors duration-300 whitespace-nowrap">
              {tool} <span className="text-primary mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
      
      <div className="marquee-container py-8 bg-surface-low border-b border-outline transform rotate-2 scale-110 mt-8">
        <div className="marquee-content" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
          {[...tools, ...tools, ...tools].reverse().map((tool, index) => (
            <span key={index} className="text-display-md font-display font-bold text-text-muted hover:text-primary transition-colors duration-300 whitespace-nowrap">
              {tool} <span className="text-primary mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
