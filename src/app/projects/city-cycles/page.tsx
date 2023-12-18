'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useProjectPage } from '@/hooks/useProjectPage';
import ProjectHero from '@/components/ProjectHero';

function CityCycles() {
  const [, hero] = useProjectPage();

  return (
    <>
      <ProjectHero
        image={hero}
        title="City Cycles Bike Rental"
        description="How can we create a user-centered rental experience?"
        wrapperClasses="items-center"
      />
    </>
  );
}

export default CityCycles;
