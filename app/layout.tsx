import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Header } from '@/components/Header';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollLine } from '@/components/ScrollLine';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cinematic Portfolio | Vibe Coder',
  description: 'A premium cinematic scroll portfolio with modern glassmorphism and storytelling.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="noise-overlay antialiased selection:bg-primary-dim selection:text-on-primary" suppressHydrationWarning>
        <SmoothScroll>
          <CustomCursor />
          <ScrollLine />
          <Header />
          <main className="relative z-10 w-full overflow-hidden">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
