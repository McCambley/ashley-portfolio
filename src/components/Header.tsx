'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sun from '~/sun.svg';
import close from '~/close.svg';
import ice from '~/ashley_ice.png';
import Logo from './Logo';
import GradientBorder from './GradientBorder';
import gradient from '~/gradient_main.png';

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
      <nav className="flex items-center justify-between">
        {/* Logo container */}
        <Logo />
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
        <ul className="hidden items-center justify-between text-xl lg:flex">
          {HeaderLinks.map((link, index) => (
            <li
              // className={`mr-10 min-w-[140px] rounded-full border-2 border-af-yellow px-7 py-2 text-center gradient-text`}
              className="mr-10 min-w-[140px]"
              key={link.name}
            >
              <GradientBorder
                // paddingX={7}
                // paddingY={2}
                borderWidth={8}
                borderRadius="full"
                className="text-center transition-all gradient-text hover:opacity-70"
              >
                <Link
                  href={link.link}
                  className={`gradient-text-${
                    index + 1
                  } block w-full px-7 py-2`}
                >
                  {link.name}
                </Link>
              </GradientBorder>
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
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark p-8 ">
          {/* The Logo / Close button container */}
          <div className="flex justify-between">
            {/* Logo container */}
            <Logo />
            {/* Close button */}
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
          <div className="space-y-1 py-6">
            {HeaderLinks.map(link => (
              <Link
                key={link.name}
                href={link.link}
                className="block px-3 py-2 text-right  text-3xl font-semibold gradient-text hover:opacity-70"
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
