import React from 'react';
import OtherProject from './OtherProject';
import { otherProjects } from '#/constants';

const OtherProjects: React.FC = () => {
  return (
    <section className="pad-top grid grid-cols-1 gap-x-4 gap-y-32 pb-32  md:grid-cols-2 lg:grid-cols-3">
      {otherProjects.map((project, index) => {
        return <OtherProject key={project.title} project={project} />;
      })}
    </section>
  );
};

export default OtherProjects;
