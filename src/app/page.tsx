import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
// import OtherProjects from '@/components/OtherProjects';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <ContactForm className="mb-16" />
    </>
  );
}
