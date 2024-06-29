import Image from 'next/image';
import Link from 'next/link';
import BabyBurst from './BabyBurst';

function Project({
  project,
  className = '',
  isReverse = false,
}: {
  project: Project;
  className?: string;
  isReverse?: boolean;
}) {
  return (
    <div
      className={`mx-auto flex w-full flex-col rounded-lg  lg:justify-center ${className} ${
        isReverse ? ' lg:flex-row' : ' lg:flex-row-reverse'
      }`}
    >
      <div className="flex w-full  flex-col items-start justify-between p-8 lg:w-1/2 lg:items-start lg:p-10">
        <h3
          className={`mb-0 w-full text-left font-heading text-4xl font-medium leading-extra-loose text-af-light lg:text-left`}
        >
          {project.title}
        </h3>
        <BabyBurst pixels={600} translateY={-48} translateX={-36} />
        <h4 className="text-af-light-light w-full pb-8 text-left text-2xl lg:pb-12 lg:text-left">
          {project.subtitle}
        </h4>
        <Image
          width={1600}
          height={900}
          src={project.src}
          alt={project.title}
          className=" mx-auto mb-8 aspect-video rounded-lg object-cover lg:hidden"
        />
        <p className="g text-af-light-light pb-12 text-xl text-af-light lg:text-left">
          {project.description}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <Link
            className="w-full rounded-full transition-all hover:opacity-70"
            href={`/projects/${project.link}`}
          >
            <button className="text-md  w-full px-6 py-2 font-heading text-af-light">
              {project.callToAction}
            </button>
          </Link>
          <Link
            className={`w-full rounded-full transition-all hover:opacity-70 ${
              // project.viewLiveCallToAction ? '' : 'hidden'
              // Temporarily hiding the view live button
              project.viewLiveCallToAction ? 'hidden' : 'hidden'
            }`}
            href={project.viewLiveLink ? project.viewLiveLink : '#'}
            target="_blank"
          >
            <button className="text-md  w-full px-6 py-2 font-heading text-af-light">
              {project.viewLiveCallToAction
                ? project.viewLiveCallToAction
                : 'View Live'}
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden aspect-square items-center justify-end self-center lg:relative lg:flex lg:max-h-[500px] lg:w-1/2 lg:max-w-[500px]">
        <Image
          src={project.src}
          fill
          alt={project.title}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default Project;
