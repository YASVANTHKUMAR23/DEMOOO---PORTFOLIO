import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Certificates } from '@/components/sections/Certificates';
import { Achievements } from '@/components/sections/Achievements';
import { Tools } from '@/components/sections/Tools';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Achievements />
      <Tools />
      <Contact />
      <Footer />
    </>
  );
}
