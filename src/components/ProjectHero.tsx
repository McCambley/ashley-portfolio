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
  buttonCta = 'View Live',
}: {
  image: StaticImageData;
  title: string;
  description: string;
  wrapperClasses?: string;
  textClasses?: string;
  viewLiveLink?: string;
  buttonClasses?: string;
  buttonCta?: string;
}) {
  return (
    <div
      className={`has-overlay flex min-h-screen flex-col justify-start bg-cover p-4 pt-32 text-af-dark md:px-24 md:py-36 ${wrapperClasses}`}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <p
        className={`z-10 mb-4 w-full text-center font-heading text-5xl font-medium ${textClasses}`}
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
        className={`align-center flex w-full flex-col justify-center gap-4 pt-8 sm:flex-row md:gap-5 ${buttonClasses}`}
      >
        <a href={viewLiveLink} target="_blank" className="self-center">
          <button className=" rounded-full border border-white px-5 py-3 font-heading font-bold text-af-light backdrop-blur-lg">
            {buttonCta}
          </button>
        </a>
        <Link href="/#projects" className="self-center">
          <button className=" rounded-full border border-white px-5 py-3 font-heading font-bold text-af-light backdrop-blur-lg">
            View Other Work
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectHero;
