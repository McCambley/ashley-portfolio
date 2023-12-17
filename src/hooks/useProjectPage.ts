import { usePathname } from 'next/navigation';
import { getProjectHeroSrc } from '#/utils';

export function useProjectPage() {
  const pathname = usePathname();
  const projectLink = pathname.split('/')[2];
  const isProjectPage = pathname.includes('/projects/');
  const hero = getProjectHeroSrc(projectLink);
  return [isProjectPage, hero];
}
