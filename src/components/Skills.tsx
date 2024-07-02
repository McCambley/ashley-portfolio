import BabyBurst from './BabyBurst';
import Skill from './Skill';
import { Fragment } from 'react';

const skills: Skill[] = [
  {
    title: 'Design',
    icon: 'skill_design2.svg',
    details: [
      'Mobile-First Design',
      'UI Design Patterns',
      'HiFi Mock-Ups',
      'Logo & Icons',
      'Identity Design',
      'Digital Prototyping',
      'Digital Marketing',
    ],
  },
  {
    title: 'User Experience',
    icon: 'skill_ux2.svg',
    details: [
      'Data Collection & Analysis',
      'Ideating',
      'User Testing',
      'Presenting Data',
      'User Research',
      'UX Theory',
      'User Testing',
    ],
  },
  {
    title: 'Tools',
    icon: 'skill_tools2.svg',
    details: [
      'Figma',
      'Photoshop',
      'InDesign',
      'Illustrator',
      'Google Suite',
      'Wordpress',
      'Wix',
      'Squarespace',
    ],
  },
];

function Skills() {
  return (
    <section className="mb-16 py-0">
      <div className="mx-auto flex w-full max-w-[1064px] flex-wrap items-stretch justify-center gap-6">
        {skills.map(skill => (
          <Fragment key={skill.title}>
            <BabyBurst />
            <Skill key={skill.title} {...skill} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Skills;
