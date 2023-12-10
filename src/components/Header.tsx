'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sun from '~/sun.svg';
import close from '~/close.svg';
import ice from '~/ashley_ice.png';

const BUTTON_SIZE = 40;
const LOGO_SIZE = 80;

const HeaderLinks = [
  {
    name: 'My Work',
    link: '/projects',
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
        {/* Logo container */}
        <div className="flex">
          <Image
            src={sun.src}
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
        {/* Hamburger icon -- only visible on small screens */}
        <button className="lg:hidden" onClick={toggleMenu}>
          <Image
            src={'./hamburger.svg'}
            width={BUTTON_SIZE}
            height={BUTTON_SIZE}
            alt="Menu"
            className="transition-all hover:opacity-70"
          />
        </button>
        {/* Navigation link buttons -- only visible on large screens */}
        <ul className="hidden items-center justify-between text-2xl lg:flex">
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
      {/* Mobile menu -- toggle into view by hamburger icon */}
      <div
        // Class should hide this section when isOpen is false
        className={`bg-dark lg:hidden ${
          isOpen ? '' : 'hidden translate-x-full opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        onClick={toggleMenu}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark px-6 py-6">
          {/* The Logo / Close button container */}
          <div className="flex justify-between">
            <Link href={'/'}>
              <Image
                src={sun.src}
                alt={''}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className="cursor-pointer transition-all hover:opacity-70"
              ></Image>
            </Link>
            <button onClick={toggleMenu}>
              <Image
                src={close.src}
                width={BUTTON_SIZE}
                height={BUTTON_SIZE}
                alt="Close"
                className="transition-all hover:opacity-70"
              />
            </button>
          </div>
          {/* the header links */}
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
