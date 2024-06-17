'use client';
import GradientBorder from './GradientBorder';
import Link from 'next/link';
import { projects } from '#/constants';
import { usePathname } from 'next/navigation';

function ProjectLinks() {
  const currentPath = usePathname();
  const links = projects.filter(
    ({ link }) => `/projects/${link}` !== currentPath
  );

  return (
    <div className="pb-24">
      <h2 className="text-af-light mb-3">Other Case Studies</h2>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
        {links.map(({ link, title }) => (
          <Link href={link} key={title}>
            <span className="white-border text-af-light w-full min-w-[200px] rounded-full px-7 py-2  text-center font-heading text-lg transition-all">
              {title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectLinks;
