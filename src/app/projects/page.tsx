import { Projects as ProjectsComponent } from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
// import OtherProjects from '@/components/OtherProjects';
import { redirect } from 'next/navigation';

function Projects() {
  // redirect to /#projects
  redirect('/#projects');

  // return (
  //   <>
  //     <ProjectsComponent standalone />
  //     <ContactForm className="mb-16 max-w-[calc(800px+64px)]" />
  //   </>
  // );
}

export default Projects;
