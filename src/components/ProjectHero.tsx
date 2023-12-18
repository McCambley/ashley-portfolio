import { StaticImageData } from 'next/image';

function ProjectHero({
  image,
  title,
  description,
  wrapperClasses = '',
  textClasses = '',
}: {
  image: StaticImageData;
  title: string;
  description: string;
  wrapperClasses?: string;
  textClasses?: string;
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
    </div>
  );
}

export default ProjectHero;
