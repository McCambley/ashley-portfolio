'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hamburger from '~/hamburger.svg';
import close from '~/close.svg';
import Logo from './Logo';
import { useProjectPage } from '@/hooks/useProjectPage';
import { useScroll } from '@/hooks/useScroll';
import { headerLinks } from '#/constants';
import { usePathname } from 'next/navigation';

const BUTTON_SIZE = 40;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled] = useScroll();
  const pathname = usePathname();
  const hash = window.location.hash;

  const isActive = (link: { link: string }): string =>
    pathname === link.link || (hash && link.link.includes(hash))
      ? 'text-af-polar'
      : 'text-af-light';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all ${
        isScrolled ? 'bg-af-dark p-4 transition-all' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1280px]">
        <nav className="flex items-center justify-between">
          <Logo />
          <button className="border-none lg:hidden" onClick={toggleMenu}>
            <Image
              src={hamburger.src}
              width={BUTTON_SIZE}
              height={BUTTON_SIZE}
              alt="Menu"
              className="transition-all hover:opacity-70"
            />
          </button>
          <ul className="hidden items-center justify-between lg:flex">
            {headerLinks.map((link, index) => (
              <li
                className={`mr-8 min-w-[140px] ${
                  link.extraClasses ? link.extraClasses : ''
                }`}
                key={link.name}
              >
                <Link
                  href={link.link}
                  className={`block w-full rounded-full px-8 py-1 text-center font-heading text-af-light transition-all hover:opacity-70 ${isActive(
                    link
                  )}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`bg-af-dark lg:hidden ${
            isOpen ? '' : 'hidden translate-x-full opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          onClick={toggleMenu}
        >
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-af-dark p-4 md:p-8">
            <div className="flex justify-between">
              <Logo />
              <button onClick={toggleMenu} className="border-none">
                <Image
                  src={close.src}
                  width={BUTTON_SIZE}
                  height={BUTTON_SIZE}
                  alt="Close"
                  className="transition-all hover:opacity-70"
                />
              </button>
            </div>
            <div className="space-y-1 py-6">
              {headerLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.link}
                  className={`block px-3 py-2 text-right  text-3xl font-semibold  hover:opacity-70 ${isActive(
                    link
                  )} `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
