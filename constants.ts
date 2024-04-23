import chair from '~/project_chair.png';
import bike from '~/project_bike.png';
import cafe from '~/project_cafe.png';
import cityCyclesHero from '~/case_studies/city_cycles/city_cycle_hero_image.png';
import sitConmigoHero from '~/case_studies/sit_conmigo/sit_conmigo_hero_image.png';
import midnightBrewHero from '~/case_studies/midnight_brew/midnight_brew_hero_image.png';
// import dorthy from '~/project_dorthy.png';
// import perkins from '~/project_perkins.jpeg';
import ice from '~/ashley_ice.png';
import sylvia from '~/case_studies/assorted/assorted_sylvia.jpg';
import businessCard from '~/case_studies/assorted/assorted_business_card.png';
import dorthy from '~/case_studies/assorted/assorted_dorthy.png';
import moab from '~/case_studies/assorted/assorted_moab.png';
import perkins from '~/case_studies/assorted/assorted_perkins.png';
import thorndike from '~/case_studies/assorted/assorted_thorndike.png';

export const projects: Project[] = [
  {
    title: 'Sit Conmigo',
    subtitle: 'Mobile Website',
    description: 'How can we create an intuitive checkout process?',
    callToAction: 'Case Study',
    link: 'sit-conmigo',
    src: chair.src,
    hero: sitConmigoHero,
  },
  {
    title: 'City Cycles',
    subtitle: 'Online Rental Process',
    description: 'How can we create a user-friendly rental experience?',
    callToAction: 'Case Study',
    link: 'city-cycles',
    src: bike.src,
    hero: cityCyclesHero,
  },
  {
    title: 'Midnight Brew',
    subtitle: 'Coffee Shop Style Guide',
    description: 'How can we create a brand for a new coffee shop?',
    callToAction: 'Case Study',
    link: 'midnight-brew',
    src: cafe.src,
    hero: midnightBrewHero,
  },
  // {
  //   title: 'Dorthy Delong',
  //   subtitle: 'Photography Portfolio',
  //   description: "How can we showcase an artist's work?",
  //   callToAction: 'Prototype',
  //   link: '/projects',
  //   src: dorthy.src,
  // },
  // {
  //   title: 'Perkins Grief Counseling',
  //   subtitle: 'Website Update',
  //   description:
  //     'How can we create get an intuitive checkout process for eco-conscious buyers?',
  //   callToAction: 'Website',
  //   link: '/projects',
  //   src: perkins.src,
  // },
];

export const otherProjects: Project[] = [
  {
    title: 'Moab Marathon',
    subtitle: 'Mobile Signup',
    description: 'How can we create a simple race signup?',
    callToAction: 'Prototype',
    link: 'https://www.figma.com/file/7zOI1zYckht5GPJmOoaUPa/Moab-Marathon-Mobile-App?type=design&node-id=0%3A1&mode=design&t=TNDmpt1mn1xcDhXT-1',
    src: moab.src,
    hero: moab,
  },
  {
    title: 'Perkins Counseling',
    subtitle: 'Website Update',
    description: "How can we showcase a counselor's certifications?",
    callToAction: 'Website',
    link: 'https://www.perkinsconsultation.com/',
    src: perkins.src,
    hero: perkins,
  },
  {
    title: "Sylvia's Sweets",
    subtitle: 'Digital Marketing Campain',
    description: 'How can we increase customers with an email campaign?',
    callToAction: 'Campaign',
    link: 'https://docs.google.com/presentation/d/1ry74sSriGWWgulnrt9x6PFpgUumyxm0LuCyvqlfktIY/edit?usp=sharing',
    src: sylvia.src,
    hero: sylvia,
  },
  {
    title: 'Thorndike Mill',
    subtitle: 'Website Navigation Update',
    description: 'How can we organize multiple pages in just 5 hours?',
    callToAction: 'Website',
    link: 'https://www.thorndikemill.org/',
    src: thorndike.src,
    hero: thorndike,
  },
  {
    title: 'Dorthy Delong',
    subtitle: 'Photography Portfolio',
    description: 'How can we showcase an artist’s work in one page?',
    callToAction: 'Prototype',
    link: 'https://www.figma.com/proto/EdvaVZo7OmgVKILL9cU9Hx/Dorthy-Delong?page-id=0%3A1&type=design&node-id=1-3&viewport=435%2C237%2C0.07&t=HjKKFWDQCxa4eJdK-1&scaling=scale-down&mode=design',
    src: dorthy.src,
    hero: dorthy,
  },
  {
    title: 'Ashley Fife Design',
    subtitle: 'Business Card',
    description: 'How can we easily give clients our contact information? ',
    callToAction: 'Card',
    link: '/case_studies/assorted/assorted_business_card.pdf',
    src: businessCard.src,
    hero: businessCard,
  },
];

export const headerLinks = [
  {
    name: 'My Work',
    link: '/projects',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Resume',
    link: '/Ashley_Fife_Resume.pdf',
  },
  // hide this link on small screens
  {
    name: 'Services',
    link: '/services',
    extraClasses: 'hidden xl:block',
  },
];
