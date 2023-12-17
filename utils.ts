import { projects } from './constants';

export const getProjectHeroSrc = (pagePath: string) => {
  const project = projects.find(project => project.link === pagePath);
  return project?.heroSrc;
};
