'use client';
import Link from 'next/link';
import { useProjectPage } from '@/hooks/useProjectPage';
import Image from 'next/image';
import ProjectHero from '@/components/ProjectHero';

function SitConmigo() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHero
        image={hero}
        title="Sit Conmigo Mobile Website"
        description="How can we create an intuitive checkout process?"
        wrapperClasses=""
        textClasses=""
      />
    </>
  );
}

export default SitConmigo;
