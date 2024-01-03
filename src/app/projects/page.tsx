import ProjectsComponent from '@/components/Projects';
import ContactForm from '@/components/ContactForm';

function Projects() {
  return (
    <>
      <ProjectsComponent standalone={true} />
      <ContactForm
        className="mb-16 max-w-[calc(800px+64px)]"
        standalone={false}
      />
    </>
  );
}

export default Projects;
