import React from 'react';
import OtherProject from './OtherProject';
import { otherProjects } from '#/constants';
import SectionIntro from './SectionIntro';

const OtherProjects: React.FC = () => {
  return (
    <section className="pad-top">
      <SectionIntro title="Other Projects" subtitle={''} />
      <div className="grid grid-cols-1 gap-x-4 gap-y-32 pt-10  md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => {
          return (
            <OtherProject
              key={project.title}
              project={project}
              // className={index === projects.length - 1 ? 'mb-0' : 'mb-20'}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OtherProjects;
