'use client';
import Link from 'next/link';
import { useProjectPage } from '@/hooks/useProjectPage';
import Image from 'next/image';

function SitConmigo() {
  const [, hero] = useProjectPage();

  return (
    <>
      <Image
        src={hero.src}
        height={hero.height}
        width={hero.width}
        alt={'hero'}
      ></Image>
      <h1>Sit Conmigo</h1>
    </>
  );
}

export default SitConmigo;
