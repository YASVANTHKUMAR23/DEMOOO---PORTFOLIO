'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal text on scroll
      gsap.from(textRef.current?.children || [], {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Parallax image
      gsap.fromTo(imageRef.current, 
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative bg-surface-low" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative w-full aspect-square rounded-full overflow-hidden border border-outline">
            <Image
              src="https://picsum.photos/seed/creative/1000/1000"
              alt="Creative Process"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>

          <div ref={textRef} className="flex flex-col gap-8">
            <h2 className="text-display-lg font-display font-bold text-text">
              The mind behind <br />
              <span className="text-primary italic">the pixels.</span>
            </h2>
            
            <p className="text-headline-md font-body text-text-muted">
              I am a multidisciplinary developer and designer with over 5 years of experience crafting digital products that live at the intersection of beauty and logic.
            </p>
            
            <p className="text-body font-body text-text-muted">
              My approach is rooted in systems thinking. I don&apos;t just build pages; I architect scalable design systems, fluid animations, and robust architectures that stand the test of time. Whether it&apos;s a high-converting landing page or a complex web application, I bring a meticulous eye for detail and a passion for performance to every project.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline">
              <div>
                <h4 className="text-display-md font-display font-bold text-text mb-2">5+</h4>
                <p className="text-label text-text-muted">Years Experience</p>
              </div>
              <div>
                <h4 className="text-display-md font-display font-bold text-text mb-2">40+</h4>
                <p className="text-label text-text-muted">Projects Shipped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
