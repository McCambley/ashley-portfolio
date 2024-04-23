import { StaticImageData } from 'next/image';
import Link from 'next/link';

function ProjectHero({
  image,
  title,
  description,
  wrapperClasses = '',
  textClasses = '',
  viewLiveLink,
  buttonClasses = '',
}: {
  image: StaticImageData;
  title: string;
  description: string;
  wrapperClasses?: string;
  textClasses?: string;
  viewLiveLink?: string;
  buttonClasses?: string;
}) {
  return (
    <div
      className={`has-overlay flex min-h-screen flex-col justify-start bg-cover p-4 pt-32 text-af-dark md:px-24 md:py-36 ${wrapperClasses}`}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <p
        className={`z-10 mb-4 w-full text-center font-handwriting text-6xl ${textClasses}`}
      >
        {title}
      </p>
      <p
        className={`z-10 w-full text-center font-heading text-4xl ${textClasses}`}
      >
        {description}
      </p>
      {/* Two pill buttons side by side with white borders and white text "View Live" and "View Case Study" */}
      <div
        className={`align-center flex w-full flex-col justify-center gap-3 pt-8 sm:flex-row md:gap-4 ${buttonClasses}`}
      >
        <button className="h-10 w-48 self-center rounded-full border border-white text-white backdrop-blur-lg">
          <a href={viewLiveLink} target="_blank">
            View Live
          </a>
        </button>
        <button className="h-10 w-48 self-center rounded-full border border-white text-white backdrop-blur-lg">
          <Link href="/projects">View Other Work</Link>
        </button>
      </div>
    </div>
  );
}

export default ProjectHero;
