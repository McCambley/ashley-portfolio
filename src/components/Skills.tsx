import Skill from './Skill';
import GradientBorder from './GradientBorder';

const skills: Skill[] = [
  {
    title: 'Design',
    icon: 'skill_design2.svg',
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
    icon: 'skill_ux2.svg',
    details: [
      'Data Collection & Analysis',
      'Ideating',
      'User Testing',
      'Presenting Data',
      'User Research',
      'UX Theory',
    ],
  },
  {
    title: 'Tools',
    icon: 'skill_tools2.svg',
    details: ['Figma', 'Photoshop', 'InDesign', 'Illustrator'],
  },
];

function Skills() {
  return (
    <section>
      <GradientBorder className="flex flex-col items-center rounded-lg p-4 md:p-8">
        <h1 className="mb-8 font-handwriting">Skills</h1>
        <div className="flex w-full flex-wrap items-stretch justify-center gap-8">
          {skills.map(skill => (
            <Skill key={skill.title} {...skill} />
          ))}
        </div>
      </GradientBorder>
    </section>
  );
}

export default Skills;
