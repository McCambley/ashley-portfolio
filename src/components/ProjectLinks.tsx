'use client';
import GradientBorder from './GradientBorder';
import Link from 'next/link';
import { projects } from '#/constants';
import { usePathname } from 'next/navigation';
import caret from '~/case_studies/assorted/caret.svg';
import Image from 'next/image';

function ProjectLinks({
  link,
  className,
}: {
  link: string;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-full justify-end gap-4 px-8 pb-12 ${className}`}
    >
      <Link href={link}>
        <span className="w-full min-w-[200px] font-heading text-2xl text-af-light transition-all">
          Next Case Study{' '}
          <Image
            src={caret.src}
            alt="caret"
            className="inline-block pl-2"
            width={24}
            height={24}
          />
        </span>
      </Link>
    </div>
  );
}

export default ProjectLinks;
