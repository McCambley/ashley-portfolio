import Project from './Project';
import { projects } from '#/constants';

function Projects() {
  return (
    <section className="pad-top">
      <h2 className={`w-full text-center font-heading`}>My Work</h2>
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
