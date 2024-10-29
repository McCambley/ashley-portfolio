import BabyBurst from '@/components/BabyBurst';
import StaticImage from '@/components/StaticImage';
import { StaticImageData } from 'next/image';

export function ProgressWithBurst({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <BabyBurst translateX={-50} />
      <StaticImage className="project-progress" image={image} alt={alt} />
    </div>
  );
}
