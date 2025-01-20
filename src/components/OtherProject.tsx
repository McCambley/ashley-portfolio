import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type OtherProjectProps = {
  project: Project;
};

const OtherProject: React.FC<OtherProjectProps> = ({ project }) => {
  return (
    <div className="text-af-light-1 flex flex-col items-center">
      <h3
        className={`text-af-light-1 mb-2 text-center font-heading text-4xl font-medium `}
      >
        {project.title}
      </h3>
      <h4 className="text-af-light-1-light pb-8 text-center  text-2xl md:pb-9">
        {project.subtitle}
      </h4>
      <div className="mx-auto mb-6 w-1/2 rounded-full">
        <Image
          width={400}
          height={400}
          src={project.src}
          alt={project.title}
          className=" aspect-square rounded-full object-cover"
        />
      </div>
      <p className="text text-af-light-1-light mb-9text-af-lighttext-2xl">
        {project.description}
      </p>
      <div className="w-fit rounded-full pt-3 transition-all hover:opacity-70">
        <Link href={`${project.link}`} target="_blank">
          <button className="w-fit  px-6 py-2 font-heading text-lg text-af-light">
            View {project.callToAction}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OtherProject;
