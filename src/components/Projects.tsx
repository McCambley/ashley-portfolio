import Project from './Project';
import { projects } from '#/constants';
import SectionIntro from './SectionIntro';

function Projects({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="pad-top">
      <SectionIntro
        title="My Work"
        subtitle={
          standalone
            ? 'A Fusion of Sophisticated Design, Aesthetics, and Impactful Creativity'
            : ''
        }
      />
      {projects.map((project, index) => {
        return (
          <Project
            key={project.title}
            project={project}
            className={index === projects.length - 1 ? 'mb-0' : 'mb-14'}
          />
        );
      })}
    </section>
  );
}

export default Projects;
