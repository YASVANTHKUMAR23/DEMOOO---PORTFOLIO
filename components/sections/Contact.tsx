'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current?.children || [], {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from(infoRef.current?.children || [], {
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-surface-high relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-bg to-bg opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-display-lg font-display font-bold text-text mb-8">
              Let&apos;s build <br /> <span className="text-primary italic">something great.</span>
            </h2>
            <p className="text-headline-md font-body text-text-muted mb-12">
              Ready to take your digital presence to the next level? Get in touch and let&apos;s discuss your project.
            </p>

            <div ref={infoRef} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center bg-surface">
                  <Mail size={20} />
                </div>
                <span className="text-headline-sm font-mono">hello@vibecoder.com</span>
              </div>
              <div className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center bg-surface">
                  <Phone size={20} />
                </div>
                <span className="text-headline-sm font-mono">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center bg-surface">
                  <MapPin size={20} />
                </div>
                <span className="text-headline-sm font-mono">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="flex flex-col gap-6 bg-surface p-8 rounded-lg">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-label text-text-muted">Name</label>
              <input
                type="text"
                id="name"
                className="bg-surface-low border border-outline rounded-md px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-label text-text-muted">Email</label>
              <input
                type="email"
                id="email"
                className="bg-surface-low border border-outline rounded-md px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-label text-text-muted">Message</label>
              <textarea
                id="message"
                rows={5}
                className="bg-surface-low border border-outline rounded-md px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="button"
              className="mt-4 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-bold rounded-md hover:bg-primary-dim transition-colors duration-300 group"
            >
              Send Message
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
