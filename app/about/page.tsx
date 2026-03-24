import { About as AboutSection } from '@/components/sections/About';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <>
      <div className="pt-32">
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}
