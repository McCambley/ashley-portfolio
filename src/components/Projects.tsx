import Image from 'next/image';
import chair from '~/project_chair.png';
import bike from '~/project_bike.png';
import cafe from '~/project_cafe.png';
import dorthy from '~/project_dorthy.png';
import perkins from '~/project_perkins.jpeg';
import Project from './Project';

const project: Project[] = [
  {
    title: 'Sit conmigo',
    subtitle: 'Mobile Website',
    description: 'How can we create get an intuitive checkout process?',
    callToAction: 'Case Study',
    link: 'https://jakemccambley.com',
    src: chair.src,
  },
  {
    title: 'City Cycles',
    subtitle: 'Online Rental Process',
    description: 'How can we create a user-friendly rental experience?',
    callToAction: 'Case Study',
    link: 'https://jakemccambley.com',
    src: bike.src,
  },
  {
    title: 'Midnight Brew',
    subtitle: 'Coffee Shop Style Guide',
    description: 'How can we create a brand new coffee shop?',
    callToAction: 'Case Study',
    link: 'https://jakemccambley.com',
    src: cafe.src,
  },
  {
    title: 'Dorthy Delong',
    subtitle: 'Photography Portfolio',
    description: "How can we showcase an artist's work?",
    callToAction: 'Prototype',
    link: 'https://jakemccambley.com',
    src: dorthy.src,
  },
  {
    title: 'Perkins Grief Counseling',
    subtitle: 'Website Update',
    description:
      'How can we create get an intuitive checkout process for eco-conscious buyers?',
    callToAction: 'Website',
    link: 'https://jakemccambley.com',
    src: perkins.src,
  },
];

function Projects() {
  return (
    <section>
      <h2 className={`w-full text-center font-heading`}>My Work</h2>
      {project.map(project => {
        return <Project key={project.title} project={project} />;
      })}
    </section>
  );
}

export default Projects;
