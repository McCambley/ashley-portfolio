import chair from '~/project_chair.png';
import bike from '~/project_bike.png';
import cafe from '~/project_cafe.png';
import cityCyclesHero from '~/case_studies/city_cycles/city_cycle_hero_image.png';
import sitConmigoHero from '~/case_studies/sit_conmigo/sit_conmigo_hero_image.png';
import midnightBrewHero from '~/case_studies/midnight_brew/midnight_brew_hero_image.png';
// import dorthy from '~/project_dorthy.png';
// import perkins from '~/project_perkins.jpeg';

export const projects: Project[] = [
  {
    title: 'Sit conmigo',
    subtitle: 'Mobile Website',
    description: 'How can we create get an intuitive checkout process?',
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
    description: 'How can we create a brand new coffee shop?',
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
