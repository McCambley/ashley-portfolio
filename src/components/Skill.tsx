import Image from 'next/image';
import GradientBorder from './GradientBorder';

function Skill({ title, icon, details }: Skill) {
  return (
    <GradientBorder className="flex min-h-[27.5rem] w-full max-w-[360px] flex-col items-center justify-start rounded-md p-8">
      <h3 className="mb-6 text-center font-heading text-3xl leading-10">
        {title}
      </h3>
      <Image src={icon} alt={title} width={68} height={68} className="mb-5" />
      <ul className="ml-12 w-full list-disc text-xl gradient-text marker:text-af-yellow">
        {details.map(detail => (
          <li className="pl-2" key={detail}>
            {detail}
          </li>
        ))}
      </ul>
    </GradientBorder>
  );
}

export default Skill;
