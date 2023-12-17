import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <ContactForm
        className="mb-16 max-w-[calc(800px+64px)]"
        standalone={true}
      />
    </>
  );
}
