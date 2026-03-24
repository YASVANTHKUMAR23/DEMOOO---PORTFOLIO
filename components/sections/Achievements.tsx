'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Star, Zap, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { icon: Award, value: '15+', label: 'Design Awards' },
  { icon: Star, value: '50+', label: 'Happy Clients' },
  { icon: Zap, value: '100k+', label: 'Lines of Code' },
  { icon: Trophy, value: '10+', label: 'Hackathons Won' },
];

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.children;
      if (items) {
        gsap.from(items, {
          scale: 0.8,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-on-primary" id="achievements">
      <div className="container mx-auto px-6">
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-on-primary/5 backdrop-blur-sm hover:bg-on-primary/10 transition-colors duration-300">
                <div className="p-4 rounded-full bg-on-primary/10">
                  <Icon size={32} className="text-on-primary" />
                </div>
                <h3 className="text-display-lg font-display font-bold">{item.value}</h3>
                <p className="text-label font-bold tracking-widest uppercase opacity-80">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
