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
    <GradientBorder
      className={`mx-auto flex w-full max-w-[800px] flex-col rounded-lg md:flex-row ${className}`}
    >
      <div className="flex w-full flex-col items-center justify-between p-8 md:w-1/2 md:items-start md:p-10">
        <h3
          className={`mb-0 text-center font-handwriting text-5xl leading-extra-loose gradient-text md:text-left`}
        >
          {project.title}
        </h3>
        <h4 className="pb-8 text-center text-2xl gradient-text-light md:pb-12 md:text-left">
          {project.subtitle}
        </h4>
        <GradientBorder className="mx-auto mb-6 w-1/2 rounded-full md:hidden">
          <Image
            width={1600}
            height={900}
            src={project.src}
            alt={project.title}
            className=" aspect-square rounded-full object-cover md:hidden"
          />
        </GradientBorder>
        <p className="g pb-12 text-center text-xl gradient-text-light md:text-left">
          {project.description}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <GradientBorder className="w-full rounded-full transition-all hover:opacity-70">
            <Link href={`/projects/${project.link}`}>
              <button className="text-md  w-full px-6 py-2 font-heading gradient-text">
                {project.callToAction}
              </button>
            </Link>
          </GradientBorder>
          <GradientBorder className="w-full rounded-full transition-all hover:opacity-70">
            <Link
              href={project.viewLiveLink ? project.viewLiveLink : '#'}
              target="_blank"
            >
              <button className="text-md  w-full px-6 py-2 font-heading gradient-text">
                {project.viewLiveCallToAction
                  ? project.viewLiveCallToAction
                  : 'View Live'}
              </button>
            </Link>
          </GradientBorder>
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
    </GradientBorder>
  );
}

export default Project;
