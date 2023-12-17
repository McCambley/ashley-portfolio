import { usePathname } from 'next/navigation';
import { getProjectHeroSrc } from '#/utils';
import { StaticImageData } from 'next/image';

export function useProjectPage(): [boolean, StaticImageData] {
  const pathname = usePathname();
  const projectLink = pathname.split('/')[2];
  const isProjectPage = pathname.includes('/projects/');
  const hero = getProjectHeroSrc(projectLink);
  return [isProjectPage, hero];
}
