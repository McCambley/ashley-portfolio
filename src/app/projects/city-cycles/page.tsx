'use client';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '~/case_studies/city_cycles/city_cycle_hero_image.png';
import { useProjectPage } from '@/hooks/useProjectPage';

function CityCycles() {
  const [, hero] = useProjectPage();

  return (
    <>
      <Image
        src={hero.src}
        height={hero.height}
        width={hero.width}
        alt={'hero'}
      ></Image>
      <h1>City Cycles</h1>
    </>
  );
}

export default CityCycles;
