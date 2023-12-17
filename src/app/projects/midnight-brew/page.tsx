'use client';
import Link from 'next/link';
import { useProjectPage } from '@/hooks/useProjectPage';
import Image from 'next/image';

function MidnightBrew() {
  const [, hero] = useProjectPage();

  return (
    <>
      <Image
        src={hero.src}
        height={hero.height}
        width={hero.width}
        alt={'hero'}
      ></Image>
      <h1>Midnight Brew</h1>
    </>
  );
}

export default MidnightBrew;
