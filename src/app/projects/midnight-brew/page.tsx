'use client';
import Link from 'next/link';
import { useProjectPage } from '@/hooks/useProjectPage';
import Image from 'next/image';
import ProjectHero from '@/components/ProjectHero';

function MidnightBrew() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHero
        image={hero}
        title="Style Guide and Branding for Midnight Brew"
        description="How can we create a brand for a new coffee shop?"
        wrapperClasses="items-end"
        textClasses="md:text-right text-white md:max-w-xl"
      />
    </>
  );
}

export default MidnightBrew;
