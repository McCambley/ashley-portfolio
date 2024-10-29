import React from 'react';
import Image from 'next/image';
import cc from '~/homepage/cc.png';
import Link from 'next/link';
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      target={project.target}
      href={project.link ? `/projects/${project.link}` : project.externalLink}
      className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <Image
        width={400}
        height={400}
        src={project.src}
        alt={project.title}
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 bg-opacity-50 px-6 py-16 opacity-0 opacity-90 transition-opacity duration-150">
        <div className="flex h-full flex-col justify-around text-center text-af-dark">
          <h3 className="font-heading text-4xl font-bold text-af-dark">
            {project.title}
          </h3>
          <p className="text-xl text-af-dark">{project.description}</p>
          <p className="font-bold text-af-dark transition-opacity hover:opacity-70">
            <span className="underline">{project.callToAction}</span> &gt;
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
