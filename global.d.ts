interface Project {
  title: string;
  subtitle: string;
  description: string;
  callToAction: string;
  link: string;
  externalLink: string;
  src: string;
  hero: StaticImageData;
  viewLiveCallToAction?: string;
  viewLiveLink?: Url;
  target: '_self' | '_blank';
}

interface Skill {
  title: string;
  icon: string;
  details: string[];
}
