'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic blur reveal
      gsap.fromTo('.story-text', 
        { filter: 'blur(20px)', opacity: 0, y: 40 },
        { filter: 'blur(0px)', opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: 'power3.out', delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Orbs */}
      <div className="bg-orb w-[50vw] h-[50vw] bg-primary/20 top-[-20%] left-[-10%]" />
      <div className="bg-orb w-[40vw] h-[40vw] bg-primary-subtle/20 bottom-[-10%] right-[-10%]" style={{ animationDelay: '-5s' }} />
      <div className="bg-orb w-[30vw] h-[30vw] bg-blue-500/10 top-[40%] left-[40%]" style={{ animationDelay: '-10s' }} />

      <div className="container mx-auto px-6 md:px-20 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-label text-primary tracking-[0.3em] uppercase glass-card px-6 py-2 rounded-full shadow-[0_0_20px_rgba(0,225,171,0.2)]">
            Chapter One: The Vision
          </span>
        </motion.div>

        <h1 ref={textRef} className="text-display-xl font-display font-bold text-text mb-8 cinematic-text leading-tight">
          <div className="story-text">Every pixel</div>
          <div className="story-text text-transparent bg-clip-text bg-gradient-to-r from-text via-text to-primary/50">tells a story.</div>
        </h1>

        <motion.p
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="story-text text-headline-md font-body text-text-muted max-w-3xl mb-12"
        >
          I craft cinematic digital experiences that transcend the screen. 
          Fusing motion, glassmorphism, and structural typography into living interfaces.
        </motion.p>

        <div className="story-text flex flex-col sm:flex-row gap-6">
          <button className="px-10 py-5 glass-card text-text font-bold rounded-full hover:bg-primary hover:text-on-primary hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(0,225,171,0.15)] hover:shadow-[0_0_50px_rgba(0,225,171,0.4)]">
            Begin the Journey
          </button>
        </div>
      </div>
    </section>
  );
}
