import chair from '~/project_chair.png';
import bike from '~/project_bike.png';
import cafe from '~/project_cafe.png';
import moab from '~/project_moab.png';
import perkins from '~/project_perkins.png';
import sylvia from '~/project_sylvia.png';
import cc from '~/project_cc.png';
import cityCyclesHero from '~/case_studies/city_cycles/city_cycle_hero_image.png';
import sitConmigoHero from '~/case_studies/sit_conmigo/sit_conmigo_hero_image.png';
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

export const projects: Project[] = [
  {
    title: 'Mobile Furniture Website',
    subtitle: 'Sit Conmigo Sustainable Chair Company',
    description:
      'Created mobile, tablet, and website mock-ups and a prototypes for the mobile checkout process for Sit Conmigo, a company specializing in ethically and sustainably-made chairs, focusing on showcasing their mission and encouraging pre-orders.',
    callToAction: 'Case Study',
    viewLiveCallToAction: 'Prototype',
    link: 'sit-conmigo',
    src: chair.src,
    hero: sitConmigoHero,
    viewLiveLink:
      'https://www.figma.com/proto/drZHdWR35HK86u8JoGI51a/Sit-Conmigo-Mobile-Final-Version?page-id=498%3A402&type=design&node-id=635-410&viewport=447%2C623%2C0.32&t=MyZ9oZ11yJGQwrbs-1&scaling=scale-down&mode=design',
  },
  {
    title: 'Bike Rental Web Redesign',
    subtitle: 'City Cycles Bike Rental Shop',
    description:
      'Designed a user-friendly online rental process for a popular bike shop developing a user persona, journey map, and a user-tested Figma prototype by analyzing web analytics aiming to shift customers from phone or in-person rentals to using the online platform.',
    callToAction: 'Case Study',
    viewLiveCallToAction: 'Prototype',
    link: 'city-cycles',
    src: bike.src,
    hero: cityCyclesHero,
    viewLiveLink:
      'https://www.figma.com/proto/GyIIyMkhRolVvt2C3XtaQV/City-Cycles-Web-Layout?page-id=462%3A528&type=design&node-id=462-678&viewport=1013%2C268%2C0.26&t=PjipDigCsv0FNaI3-1&scaling=scale-down&mode=design',
  },
  {
    title: 'Coffee Shop Style Guide',
    subtitle: 'Midnight Brew Coffee Shop',
    description:
      "I designed a color scheme, typescale, brand images, logo, icons, and social media headers, all packaged into a brand style guide ensuring the brand resonated with her neighborhood and aligned with the shop's offerings of coffee, tea, and food, influencing everything from the website to promotional materials.",
    callToAction: 'Case Study',
    viewLiveCallToAction: 'Style Guide',
    link: 'midnight-brew',
    src: cafe.src,
    hero: midnightBrewHero,
    viewLiveLink: '/case_studies/midnight_brew/midnight_brew_branding.pdf',
  },
  {
    title: 'Website Redesign',
    subtitle: 'Moab moab moab moab moab',
    description:
      'Redesigned counselor’s website to better reflect her qualifications for an upcoming PhD application on Squarespace platform. Also enhanced user experience for her clients. ',
    callToAction: 'Prototype',
    viewLiveCallToAction: '',
    link: '',
    src: moab.src,
    hero: null,
    viewLiveLink: '',
  },
  {
    title: 'Digital Marketing Campaign',
    subtitle: 'Sylvia’s Sweets Online Subscriptions',
    description:
      "Designed a digital marketing campaign aimed to resolve Sylvia's marketing difficulties by developing strategies to attract and engage new customers for her subscription sweets boxes by creating a landing page, email marketing , social media posts, blogs, and SEO.",
    callToAction: 'Presentation',
    viewLiveCallToAction: '',
    link: '',
    src: sylvia.src,
    hero: null,
    viewLiveLink: '',
  },
  {
    title: 'Website Redesign',
    subtitle: 'Perkins End-of-Life Counseling Website ',
    description:
      'Redesigned counselor’s website to better reflect her qualifications for an upcoming PhD application on Squarespace platform. Also enhanced user experience for her clients. ',
    callToAction: 'Prototype',
    viewLiveCallToAction: '',
    link: '',
    src: perkins.src,
    hero: null,
    viewLiveLink: '',
  },
  {
    title: 'T-Shirt and Hat Logo',
    subtitle: 'Local Construction Crew Logo',
    description:
      'Designed a logo for t-shirts and hats for a local construction crew. Use Adobe Illustrator to mimic a previously made sketched logo.',
    callToAction: 'Logo',
    viewLiveCallToAction: '',
    link: '',
    src: cc.src,
    hero: null,
    viewLiveLink: '',
  },
];

export const otherProjects: Project[] = [
  /*
  Note in use in the current version of the site
  {
    title: 'Moab Marathon',
    subtitle: 'Mobile Signup',
    description: 'How can we create a simple race signup?',
    callToAction: 'Prototype',
    link: 'https://www.figma.com/proto/cdnaQ83V6xvOyslloLzLcl/Moab-Marathon-Mobile-App-New-Version?page-id=0%3A1&type=design&node-id=1-4&viewport=111%2C266%2C0.15&t=ZAZsQyUpsf2JLcUV-1&scaling=scale-down&starting-point-node-id=209%3A160',
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
    link: 'https://docs.google.com/presentation/d/1O02lwFyxii9MoVxMBm8zd597BtkUen9F_LyVINM0DyM/edit?usp=sharing',
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
  */
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
