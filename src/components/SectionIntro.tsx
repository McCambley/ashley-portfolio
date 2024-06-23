import React from 'react';
import BabyBurst from './BabyBurst';

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

function SectionIntro({ title, subtitle, children }: Props) {
  return subtitle ? (
    <div className="mb-12 w-full">
      <h1 className="mb-4 w-full text-center font-heading font-medium">
        {title}
      </h1>
      <p className="mx-auto max-w-[840px] text-center text-2xl text-af-light">
        {subtitle}
      </p>
      {children}
    </div>
  ) : (
    <div className="mb-4 w-full">
      <h2 className="mb-4 w-full text-center font-heading font-medium">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default SectionIntro;
