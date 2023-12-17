import { projects } from './constants';
import { StaticImageData } from 'next/image';

export const getProjectHeroSrc = (pagePath: string): StaticImageData => {
  const project = projects.find(project => project.link === pagePath);
  return project?.hero;
};
