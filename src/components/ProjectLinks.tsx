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
      <h2 className="mb-3 gradient-text">Other Works</h2>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
        {links.map(({ link, title }) => (
          <Link href={link} key={title}>
            <GradientBorder className="w-full min-w-[200px] rounded-full px-7 py-2 text-center font-heading  transition-all gradient-text ">
              <span className="text-lg gradient-text">{title}</span>
            </GradientBorder>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectLinks;
