import React from 'react';
import Skill from './Skill';

const skills: Skill[] = [
  {
    title: 'Design',
    icon: 'design.svg',
    details: [
      'Mobile-First Design',
      'UI Design Patterns',
      'High Fidelity Mock-Up',
      'Logo & Icons',
      'Identity Design',
      'Digital Prototyping',
    ],
  },
  {
    title: 'User Experience',
    icon: 'ux.svg',
    details: [
      'Data Collection & Analysis',
      'Ideating',
      'Presenting Data',
      'User Research',
      'UX Theory',
    ],
  },
  {
    title: 'Tools',
    icon: 'tools.svg',
    details: ['Figma', 'Photoshop', 'InDesign', 'Illustrator'],
  },
];

function Skills() {
  return (
    <section>
      <h1>Skills</h1>
      <div className="flex flex-col items-center justify-center">
        {skills.map(skill => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
