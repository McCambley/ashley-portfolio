import React from 'react';
import Image from 'next/image';
import GradientBorder from './GradientBorder';
import Link from 'next/link';

type OtherProjectProps = {
  project: Project;
};

const OtherProject: React.FC<OtherProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center gradient-text-1">
      <h3
        className={`mb-2 text-center font-handwriting text-5xl gradient-text-1 `}
      >
        {project.title}
      </h3>
      <h4 className="gradient-text-1-light pb-8 text-center  text-2xl md:pb-9">
        {project.subtitle}
      </h4>
      <GradientBorder className="mx-auto mb-6 w-1/2 rounded-full">
        <Image
          width={400}
          height={400}
          src={project.src}
          alt={project.title}
          className=" aspect-square rounded-full object-cover"
        />
      </GradientBorder>
      <p className="text gradient-text-1-light mb-9 text-center text-2xl">
        {project.description}
      </p>
      <GradientBorder className="w-fit rounded-full transition-all hover:opacity-70">
        <Link href={`${project.link}`}>
          <button className="w-fit  px-6 py-2 font-heading text-lg gradient-text">
            View {project.callToAction}
          </button>
        </Link>
      </GradientBorder>
    </div>
  );
};

export default OtherProject;
