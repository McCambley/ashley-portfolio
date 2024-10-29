'use client';
import React from 'react';
import Image from 'next/image';
import cc from '~/homepage/cc.png';
import Link from 'next/link';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isVisible, elementRef } = useRevealOnScroll();
  return (
    <div
      ref={elementRef}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      <Link
        target={project.target}
        href={project.link ? `/projects/${project.link}` : project.externalLink}
        className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
      >
        <Image
          width={800}
          height={800}
          src={project.src}
          alt={project.title}
          className="object-cover"
        />
        <div className="absolute inset-0 flex hidden items-center justify-center rounded-md bg-white bg-opacity-50 px-7 py-16 opacity-0 transition-opacity duration-150 hover:bg-opacity-100 hover:opacity-90 sm:block">
          <div className="flex h-full flex-col justify-center text-center text-af-dark">
            <h3 className="min-h-[80px] font-heading text-4xl font-bold text-af-dark">
              {project.title}
            </h3>
            <p className="mb-8 text-xl text-af-dark">{project.description}</p>
            <p className="font-bold text-af-dark transition-opacity hover:opacity-70">
              <span className="underline">{project.callToAction}</span> &gt;
            </p>
          </div>
        </div>
      </Link>
      <div className="pb-8 pt-4 sm:hidden">
        <Link
          target={project.target}
          href={
            project.link ? `/projects/${project.link}` : project.externalLink
          }
        >
          <h3 className="mb-1 underline">{project.title}</h3>
        </Link>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
