'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 bg-bg border-t border-outline">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-display-md font-display font-bold text-text">
          VC.
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="#" className="text-label text-text-muted hover:text-primary transition-colors duration-300">
            Twitter
          </Link>
          <Link href="#" className="text-label text-text-muted hover:text-primary transition-colors duration-300">
            LinkedIn
          </Link>
          <Link href="#" className="text-label text-text-muted hover:text-primary transition-colors duration-300">
            GitHub
          </Link>
          <Link href="#" className="text-label text-text-muted hover:text-primary transition-colors duration-300">
            Dribbble
          </Link>
        </div>

        <div className="text-label text-text-muted">
          &copy; {new Date().getFullYear()} Vibe Coder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
