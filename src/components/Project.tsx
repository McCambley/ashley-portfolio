import Image from 'next/image';
import GradientBorder from './GradientBorder';
import Link from 'next/link';

function Project({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-[800px] flex-col rounded-lg md:flex-row ${className}`}
    >
      <div className="flex w-full flex-col items-center justify-between p-8 md:w-1/2 md:items-start md:p-10">
        <h3
          className={`text-af-light mb-0 text-center font-heading text-5xl font-medium leading-extra-loose md:text-left`}
        >
          {project.title}
        </h3>
        <h4 className="text-af-light-light pb-8 text-center text-2xl md:pb-12 md:text-left">
          {project.subtitle}
        </h4>
        {/* <GradientBorder className=""> */}
        <Image
          width={1600}
          height={900}
          src={project.src}
          alt={project.title}
          className=" mx-auto mb-6 aspect-square w-1/2 rounded-full object-cover md:hidden"
        />
        {/* </GradientBorder> */}
        <p className="g text-af-light-light text-af-lightext-xl pb-12 md:text-left">
          {project.description}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <Link
            className="w-full rounded-full transition-all hover:opacity-70"
            href={`/projects/${project.link}`}
          >
            <button className="text-md  text-af-light w-full px-6 py-2 font-heading">
              {project.callToAction}
            </button>
          </Link>
          <Link
            className="w-full rounded-full transition-all hover:opacity-70"
            href={project.viewLiveLink ? project.viewLiveLink : '#'}
            target="_blank"
          >
            <button className="text-md  text-af-light w-full px-6 py-2 font-heading">
              {project.viewLiveCallToAction
                ? project.viewLiveCallToAction
                : 'View Live'}
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden items-center justify-end md:relative md:flex md:w-1/2">
        <Image
          src={project.src}
          fill
          alt={project.title}
          className="rounded-r-lg object-cover "
        />
      </div>
    </div>
  );
}

export default Project;
