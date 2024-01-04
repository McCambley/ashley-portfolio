import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sun from '~/sun.svg';
import { useScroll } from '@/hooks/useScroll';

const BUTTON_SIZE = 40;

function Logo() {
  const [logoSize, setLogoSize] = useState(80);
  const [isScrolled] = useScroll();

  useEffect(() => {
    if (isScrolled) {
      setLogoSize(40);
    } else {
      setLogoSize(80);
    }
  }, [isScrolled]);
  return (
    <Link href="/" className="flex transition-all hover:opacity-70 ">
      <Image
        src={sun.src}
        alt={''}
        width={logoSize}
        height={logoSize}
        className="cursor-pointer transition-all"
        priority
      ></Image>

      <div
        className={`hidden flex-col items-center justify-center p-4 text-center transition-all gradient-text sm:flex ${
          isScrolled ? 'sm:hidden' : ''
        }`}
      >
        <p className="font-handwriting text-4xl">Ashley Fife</p>
        <p className="text-sm">UI/UX Designer</p>
      </div>
    </Link>
  );
}

export default Logo;
