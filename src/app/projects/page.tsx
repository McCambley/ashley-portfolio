import ProjectsComponent from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
// import OtherProjects from '@/components/OtherProjects';

function Projects() {
  return (
    <>
      <ProjectsComponent standalone={true} />
      {/* <OtherProjects /> */}
      <ContactForm
        className="mb-16 max-w-[calc(800px+64px)]"
        standalone={false}
      />
    </>
  );
}

export default Projects;
