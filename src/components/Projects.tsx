import { projects } from '#/constants';
import ProjectCardGrid from './ProjectCardGrid';

const caseStudies = projects.slice(0, 3);
const otherWork = projects.slice(3);

export function Projects({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      className={standalone ? 'pad-top' : 'py-9 md:py-24 md:pt-0'}
      id="projects"
    >
      <ProjectCardGrid title="Case Studies" projects={caseStudies} />
      <ProjectCardGrid title="Other Work" projects={otherWork} />
    </section>
  );
}
