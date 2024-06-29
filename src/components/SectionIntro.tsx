import React from 'react';
import BabyBurst from './BabyBurst';

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  onPage?: boolean;
}

function SectionIntro({ title, subtitle, children, onPage }: Props) {
  return subtitle || onPage ? (
    <div className="mb-12 w-full">
      <h1 className="mb-4 w-full font-heading text-5xl font-medium">{title}</h1>
      {subtitle ? (
        <p className="mx-auto w-full text-2xl text-af-light">{subtitle}</p>
      ) : null}
      {children}
    </div>
  ) : (
    <div className="mb-4 w-full">
      <h2 className="mb-4 w-full font-heading font-medium">{title}</h2>
      {children}
    </div>
  );
}

export default SectionIntro;
