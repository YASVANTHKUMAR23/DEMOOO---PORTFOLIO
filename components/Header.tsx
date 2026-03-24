'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <nav className="glass-nav rounded-pill px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="text-primary font-display font-bold text-xl tracking-tighter">
          VC.
        </div>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.path}
                  className={twMerge(
                    "text-label transition-colors duration-300",
                    isActive ? "text-primary" : "text-text-muted hover:text-text"
                  )}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(0,225,171,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
