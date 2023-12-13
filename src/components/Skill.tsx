import Image from 'next/image';
import GradientBorder from './GradientBorder';

function Skill({ title, icon, details }: Skill) {
  return (
    <GradientBorder className="flex min-h-[27.5rem] w-full max-w-[300px] flex-col items-center justify-start rounded-md p-8">
      <h3 className="mb-4 min-h-[96px] text-center font-handwriting leading-none">
        {title}
      </h3>
      <Image src={icon} alt={title} width={100} height={100} className="mb-4" />
      <ul className="ml-8 w-full list-disc gradient-text marker:text-af-yellow">
        {details.map(detail => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </GradientBorder>
  );
}

export default Skill;
