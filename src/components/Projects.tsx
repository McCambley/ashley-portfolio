import { Project } from './Project';
import { projects } from '#/constants';
import SectionIntro from './SectionIntro';
import ProjectCard from './ProjectCard';
import ProjectCardGrid from './ProjectCardGrid';

const caseStudies = projects.slice(0, 3);
const otherWork = projects.slice(3);

export function Projects({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      className={standalone ? 'pad-top' : 'py-9 md:py-24 md:pt-0'}
      id="projects"
    >
      {/* {standalone ? (
        <SectionIntro
          title="My Work"
          subtitle="A Fusion of Sophisticated Design, Aesthetics, and Impactful Creativity"
        />
      ) : null} */}
      {/* {projects.map((project, index) => {
        return (
          <Project
            key={project.title}
            project={project}
            isReverse={Boolean(index % 2)}
            className={`${
              index === projects.length - 1 ? 'lg:mb-0' : 'mb-8 lg:mb-[200px]'
            }`}
          />
        );
      })} */}
      <ProjectCardGrid title="Case Studies" projects={caseStudies} />
      <ProjectCardGrid title="Other Work" projects={otherWork} />
    </section>
  );
}
