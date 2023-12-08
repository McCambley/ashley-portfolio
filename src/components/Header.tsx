'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import sun from '@/public/sun.svg';
import close from '@/public/close.svg';
import Link from 'next/link';
import ice from '~/ashley_ice.png';
const BUTTON_SIZE = 40;
const LOGO_SIZE = 80;

const HeaderLinks = [
  {
    name: 'My Work',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Resume',
    link: ice.src,
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-dark">
      <nav className="flex items-center justify-between" onClick={toggleMenu}>
        <div className="flex">
          <Image
            src={'/sun.svg'}
            alt={''}
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className="cursor-pointer transition-all hover:opacity-70"
          ></Image>
          <div className="flex flex-col items-center justify-center p-4 text-center text-2xl gradient-text">
            <p>Ashley Fife</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <button className="sm:hidden" onClick={toggleMenu}>
          <Image
            src={'./hamburger.svg'}
            width={BUTTON_SIZE}
            height={BUTTON_SIZE}
            alt="Menu"
            className="transition-all hover:opacity-70"
          />
        </button>
        <ul className="hidden items-center justify-between text-2xl sm:flex">
          {HeaderLinks.map((link, index) => (
            <li
              key={link.name}
              className={`mr-10 min-w-[160px] rounded-full border-4 border-af-yellow px-8 py-3 text-center gradient-text`}
            >
              <Link href={link.link} className={`gradient-text-${index}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`bg-dark sm:hidden ${isOpen ? '' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        onClick={toggleMenu}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-between">
            <Link href={'/'}>
              <Image
                src={'/sun.svg'}
                alt={''}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className="cursor-pointer transition-all hover:opacity-70"
              ></Image>
            </Link>
            <button onClick={toggleMenu}>
              <Image
                src={'./close.svg'}
                width={BUTTON_SIZE}
                height={BUTTON_SIZE}
                alt="Close"
                className="transition-all hover:opacity-70"
              />
            </button>
          </div>
          <div className="space-y-3 py-6">
            {HeaderLinks.map(link => (
              <Link
                key={link.name}
                href={link.link}
                className="block rounded-lg px-3 py-2 font-semibold text-slate-400 gradient-text hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
