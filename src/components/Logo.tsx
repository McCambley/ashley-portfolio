import Link from 'next/link';
import Image from 'next/image';
import sun from '~/sun.svg';

const BUTTON_SIZE = 40;
const LOGO_SIZE = 80;

function Logo() {
  return (
    <Link href="/" className="flex transition-all hover:opacity-70 ">
      <Image
        src={sun.src}
        alt={''}
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className="cursor-pointer transition-all"
      ></Image>

      <div className="hidden flex-col items-center justify-center p-4 text-center transition-opacity gradient-text sm:flex">
        <p className="text-xl">Ashley Fife</p>
        <p>UI/UX Designer</p>
      </div>
    </Link>
  );
}

export default Logo;
