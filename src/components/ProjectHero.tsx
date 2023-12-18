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
      className={`flex min-h-screen flex-col justify-start bg-cover px-24 py-36 text-af-dark ${wrapperClasses}`}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <p
        className={`mb-4 w-full text-center font-handwriting text-6xl ${textClasses}`}
      >
        {title}
      </p>
      <p className={`w-full text-center font-heading text-4xl ${textClasses}`}>
        {description}
      </p>
    </div>
  );
}

export default ProjectHero;
