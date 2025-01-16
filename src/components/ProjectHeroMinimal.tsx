import { StaticImageData } from 'next/image';
import Link from 'next/link';
import StaticImage from './StaticImage';
import BabyBurst from './BabyBurst';

function ProjectHeroMinimal({
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
    <div className="pad-top mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2">
      <div
        className={
          'flex flex-col justify-center pt-8 md:pt-0'
          // `has-overlay flex min-h-screen flex-col justify-start bg-cover p-4 pt-32 text-af-dark md:px-24 md:py-36 ${wrapperClasses}`
        }
        // style={{ backgroundImage: `url(${image.src})` }}
      >
        <BabyBurst
          translateX={0}
          translateY={-25}
          wrapperStyle="hidden md:block"
        />
        <p
          className={`z-10 mb-10 font-heading text-5xl font-medium ${textClasses}`}
        >
          {title}
        </p>
        <p className={`z-10 font-heading text-4xl ${textClasses}`}>
          {description}
        </p>
        {/* Two pill buttons side by side with white borders and white text "View Live" and "View Case Study" */}
        <div
          className={`align-center flex w-full flex-row gap-4 pt-10 md:gap-5 ${buttonClasses}`}
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
      <div>
        <BabyBurst
          translateX={80}
          translateY={-10}
          wrapperStyle="hidden md:block"
        />
        <StaticImage image={image} alt={title} className="" />
      </div>
    </div>
  );
}

export default ProjectHeroMinimal;
