import React from 'react';
import ProjectCard from './ProjectCard';

interface Props {
  title: string;
  projects: Project[];
}

const ProjectCardGrid: React.FC<Props> = ({ title, projects }) => {
  return (
    <div className="mb-32">
      <h2 className="font-heading">{title}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 sm:gap-8 lg:gap-12">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardGrid;
