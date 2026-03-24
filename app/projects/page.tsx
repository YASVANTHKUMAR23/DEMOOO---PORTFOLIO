import { Projects as ProjectsSection } from '@/components/sections/Projects';
import { Footer } from '@/components/Footer';

export default function Projects() {
  return (
    <>
      <div className="pt-32">
        <ProjectsSection />
      </div>
      <Footer />
    </>
  );
}
