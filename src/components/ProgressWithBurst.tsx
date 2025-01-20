import BabyBurst from '@/components/BabyBurst';
import StaticImage from '@/components/StaticImage';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

export function ProgressWithBurst({
  image,
  alt,
  id,
}: {
  image: StaticImageData;
  alt: string;
  id: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center" id={id}>
      <BabyBurst translateX={-50} />
      <StaticImage className="project-progress" image={image} alt={alt} />
      <div className="absolute bottom-0 left-0 right-0 top-0 grid h-[160px] w-full max-w-[400px] grid-cols-3 place-self-center self-center">
        <Link href="#1"></Link>
        <Link href="#2"></Link>
        <Link href="#3"></Link>
      </div>
    </div>
  );
}
