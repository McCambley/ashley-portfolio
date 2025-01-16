import chair from '~/project_chair.png';
import bike from '~/project_bike.png';
import cafe from '~/project_cafe.png';
// import moab from '~/project_moab.png';
// import perkins from '~/project_perkins.png';
// import sylvia from '~/project_sylvia.png';
// import cc from '~/project_cc.png';
import ccMockup from '~/cc_logo_mockup.png';
import cityCyclesHero from '~/case_studies/city_cycles/city_cycle_hero_minimal.png';
import sitConmigoHero from '~/case_studies/sit_conmigo/sit_conmigo_hero_minimal.png';
import midnightBrewHero from '~/case_studies/midnight_brew/midnight_brew_hero_image.png';

// import dorthy from '~/project_dorthy.png';
// import perkins from '~/project_perkins.jpeg';
// import ice from '~/ashley_ice.png';
// import sylvia from '~/case_studies/assorted/assorted_sylvia.jpg';
// import businessCard from '~/case_studies/assorted/assorted_business_card.png';
// import dorthy from '~/case_studies/assorted/assorted_dorthy.png';
// import moab from '~/case_studies/assorted/assorted_moab.png';
// import perkins from '~/case_studies/assorted/assorted_perkins.png';
// import thorndike from '~/case_studies/assorted/assorted_thorndike.png';
// Homepage project grid
import cc from '~/homepage/cc.png';
import citycycles from '~/homepage/citycycles.png';
import dorthy from '~/homepage/dorthy.png';
import mnbrew from '~/homepage/mnbrew.png';
import moab from '~/homepage/moab.png';
import perkins from '~/homepage/perkins.png';
import sitcon from '~/homepage/sitcon.png';
import sylvia from '~/homepage/sylvia.png';
import tca from '~/homepage/tca.png';
import thorndike from '~/homepage/thorndike.png';

export const projects: Project[] = [
  {
    title: 'Sit Conmigo',
    subtitle: 'Sit Conmigo Sustainable Chair Company',
    description: 'Mobile app and checkout for sustainable chair company',
    callToAction: 'View Case Study',
    viewLiveCallToAction: 'Prototype',
    link: 'sit-conmigo',
    externalLink: '',
    src: sitcon.src,
    hero: sitConmigoHero,
    viewLiveLink:
      'https://www.figma.com/proto/drZHdWR35HK86u8JoGI51a/Sit-Conmigo-Mobile-Final-Version?page-id=498%3A402&type=design&node-id=635-410&viewport=447%2C623%2C0.32&t=MyZ9oZ11yJGQwrbs-1&scaling=scale-down&mode=design',
    target: '_self',
  },
  {
    title: 'City Cycles',
    subtitle: 'City Cycles Bike Rental Shop',
    description: 'Redesigned rental process for bike shop website',
    callToAction: 'View Case Study',
    viewLiveCallToAction: 'Prototype',
    link: 'city-cycles',
    externalLink: '',
    src: citycycles.src,
    hero: cityCyclesHero,
    viewLiveLink:
      'https://www.figma.com/proto/GyIIyMkhRolVvt2C3XtaQV/City-Cycles-Web-Layout?page-id=462%3A528&type=design&node-id=462-678&viewport=1013%2C268%2C0.26&t=PjipDigCsv0FNaI3-1&scaling=scale-down&mode=design',
    target: '_self',
  },
  {
    title: 'Midnight Brew',
    subtitle: 'Midnight Brew Coffee Shop',
    description: 'Coffee shop Style Guide, including logo and iconography',
    callToAction: 'View Case Study',
    viewLiveCallToAction: 'Style Guide',
    link: 'midnight-brew',
    externalLink: '',
    src: mnbrew.src,
    hero: midnightBrewHero,
    viewLiveLink: '/case_studies/midnight_brew/midnight_brew_branding.pdf',
    target: '_self',
  },
  {
    title: 'Trail Crew Assoc.',
    subtitle: 'Alumni Website',
    description: 'Redesigned alumni website and newsletter revamp',
    callToAction: 'View Website',
    viewLiveCallToAction: '',
    link: '',
    externalLink: 'https://www.amctca.com/',
    src: tca.src,
    hero: null,
    viewLiveLink: '',
    target: '_blank',
  },
  {
    title: 'Laura Perkins',
    subtitle: 'Perkins End-of-Life Counseling Website',
    description: 'Redesigned counselor’s website on Squarespace platform',
    callToAction: 'View Website',
    viewLiveCallToAction: '',
    link: '',
    externalLink: 'https://www.perkinsconsultation.com/',
    src: perkins.src,
    hero: null,
    viewLiveLink: '',
    target: '_blank',
  },
  {
    title: 'Moab Marathon',
    subtitle: 'Moab Marathon',
    description: 'Redesigned registration process for popular marathon',
    callToAction: 'View Prototype',
    viewLiveCallToAction: '',
    link: '',
    externalLink:
      'https://www.figma.com/proto/cdnaQ83V6xvOyslloLzLcl/Moab-Marathon-Mobile-App-New-Version?page-id=0%3A1&type=design&node-id=1-4&viewport=111%2C266%2C0.15&t=ZAZsQyUpsf2JLcUV-1&scaling=scale-down&starting-point-node-id=209%3A160',
    src: moab.src,
    hero: null,
    viewLiveLink: '',
    target: '_blank',
  },
  {
    title: "Sylvia's Sweets",
    subtitle: 'Sylvia’s Sweets Online Subscriptions',
    description:
      'Landing page, email marketing , social media posts, blogs, and SEO',
    callToAction: 'View Campaign',
    viewLiveCallToAction: '',
    link: '',
    externalLink:
      'https://docs.google.com/presentation/d/1O02lwFyxii9MoVxMBm8zd597BtkUen9F_LyVINM0DyM/edit?usp=sharing',
    src: sylvia.src,
    hero: null,
    viewLiveLink: '',
    target: '_blank',
  },
  {
    title: 'Thorndike Mill',
    subtitle: 'Website Navigation Update',
    description: 'Redesigned museum website on Squarespace platform',
    callToAction: 'Website',
    link: '',
    src: thorndike.src,
    hero: thorndike,
    externalLink: 'https://www.thorndikemill.org/',
    target: '_blank',
  },
  {
    title: 'Dorthy Delong',
    subtitle: 'Photography Portfolio',
    description: 'One page Figma prototype for  photographer portfolio',
    callToAction: 'Prototype',
    link: '',
    src: dorthy.src,
    hero: dorthy,
    externalLink:
      'https://www.figma.com/proto/EdvaVZo7OmgVKILL9cU9Hx/Dorthy-Delong?page-id=0%3A1&type=design&node-id=1-3&viewport=435%2C237%2C0.07&t=HjKKFWDQCxa4eJdK-1&scaling=scale-down&mode=design',
    target: '_blank',
  },
  {
    title: 'Construction Crew',
    subtitle: 'Local Construction Crew Logo',
    description:
      'Adobe Illustrator logo paying homage to a beloved pencil sketch',
    callToAction: 'View Logo',
    viewLiveCallToAction: '',
    link: '',
    externalLink: ccMockup.src,
    src: cc.src,
    hero: null,
    viewLiveLink: '',
    target: '_blank',
  },
];

export const otherProjects: Project[] = [
  /*
  Note in use in the current version of the site
  {
    title: 'Moab Marathon',
    subtitle: 'Mobile Signup',
    description: '',
    callToAction: 'Prototype',
    link: 'https://www.figma.com/proto/cdnaQ83V6xvOyslloLzLcl/Moab-Marathon-Mobile-App-New-Version?page-id=0%3A1&type=design&node-id=1-4&viewport=111%2C266%2C0.15&t=ZAZsQyUpsf2JLcUV-1&scaling=scale-down&starting-point-node-id=209%3A160',
    src: moab.src,
    hero: moab,
  },
  {
    title: 'Perkins Counseling',
    subtitle: 'Website Update',
    description: "",
    callToAction: 'Website',
    link: 'https://www.perkinsconsultation.com/',
    src: perkins.src,
    hero: perkins,
  },
  {
    title: "Sylvia's Sweets",
    subtitle: 'Digital Marketing Campain',
    description: '',
    callToAction: 'Campaign',
    link: 'https://docs.google.com/presentation/d/1O02lwFyxii9MoVxMBm8zd597BtkUen9F_LyVINM0DyM/edit?usp=sharing',
    src: sylvia.src,
    hero: sylvia,
  },

  {
    title: 'Ashley Fife Design',
    subtitle: 'Business Card',
    description: '',
    callToAction: 'Card',
    link: '/case_studies/assorted/assorted_business_card.pdf',
    src: businessCard.src,
    hero: businessCard,
  },
  */
];

export const headerLinks = [
  {
    name: 'My Work',
    link: '/#projects',
    target: '_self',
  },
  {
    name: 'About',
    link: '/about',
    target: '_self',
  },
  {
    name: 'Contact',
    link: '/contact',
    target: '_self',
  },
  {
    name: 'Resume',
    link: '/Ashley_Fife_Resume.pdf',
    target: '_blank',
  },
  // hide this link on small screens
  {
    name: 'Services',
    link: '/services',
    extraClasses: 'hidden xl:block',
    target: '_self',
  },
];
