import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
// import OtherProjects from '@/components/OtherProjects';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      {/* <OtherProjects /> */}
      <ContactForm
        className="mb-16 max-w-[calc(800px+64px)]"
        standalone={false}
      />
    </>
  );
}
