import Project from './Project';
import { projects } from '#/constants';
import SectionIntro from './SectionIntro';

function Projects({
  standalone = false,
  showTitle = true,
}: {
  standalone?: boolean;
  showTitle?: boolean;
}) {
  return (
    <section className="pad-top" id="projects">
      <SectionIntro
        title={showTitle ? 'My Work' : ''}
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
            isReverse={Boolean(index % 2)}
            className={`${
              index === projects.length - 1 ? 'mb-0' : 'mb-[200px]'
            }`}
          />
        );
      })}
    </section>
  );
}

export default Projects;
