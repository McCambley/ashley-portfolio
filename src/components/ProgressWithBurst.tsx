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
      <div className="absolute left-1/2 top-1/2 grid h-[160px] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 grid-cols-3">
        <Link href="#1"></Link>
        <Link href="#2"></Link>
        <Link href="#3"></Link>
      </div>
    </div>
  );
}
