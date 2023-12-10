import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sun from '~/sun.svg';

const BUTTON_SIZE = 40;
const LOGO_SIZE = 80;

function Logo() {
  return (
    <Link href="/" className="flex">
      <Image
        src={sun.src}
        alt={''}
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className="cursor-pointer transition-all hover:opacity-70"
      ></Image>

      <div className="flex flex-col items-center justify-center p-4 text-center gradient-text">
        <p className="text-xl">Ashley Fife</p>
        <p>UI/UX Designer</p>
      </div>
    </Link>
  );
}

export default Logo;
