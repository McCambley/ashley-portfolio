'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sun from '~/sun.svg';
import hamburger from '~/hamburger.svg';
import close from '~/close.svg';
import ice from '~/ashley_ice.png';
import Logo from './Logo';
import GradientBorder from './GradientBorder';
import { useProjectPage } from '@/hooks/useProjectPage';

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
  // hide this link on small screens
  {
    name: 'Services',
    link: '/services',
    extraClasses: 'hidden xl:block',
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // State to track whether to apply solid background
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectPage, hero] = useProjectPage();

  useEffect(() => {
    // Detect if window is scrolled past on page load
    // const isScrolled = window.scrollY > 0;
    // if (isScrolled) {
    //   setIsScrolled(true);
    // }
    const handleScroll = () => {
      // Set state based on scroll position
      setIsScrolled(window.scrollY > 0);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-colors ${
        isScrolled ? 'bg-af-dark' : ''
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* Logo container */}
        <Logo />
        {/* Hamburger icon -- only visible on small screens */}
        <button className="lg:hidden" onClick={toggleMenu}>
          <Image
            src={hamburger.src}
            width={BUTTON_SIZE}
            height={BUTTON_SIZE}
            alt="Menu"
            className="transition-all hover:opacity-70"
          />
        </button>
        {/* Navigation link buttons -- only visible on large screens */}
        <ul className="hidden items-center justify-between text-lg lg:flex">
          {HeaderLinks.map((link, index) => (
            <li
              // className={`mr-10 min-w-[140px] rounded-full border-2 border-af-yellow px-7 py-2 text-center gradient-text`}
              className={`mr-8 min-w-[140px] ${
                link.extraClasses ? link.extraClasses : ''
              } ${isProjectPage ? '' : ''}`}
              key={link.name}
            >
              <GradientBorder
                // paddingX={7}
                // paddingY={2}
                borderWidth={8}
                borderRadius="full"
                className={`rounded-full text-center transition-all gradient-text hover:opacity-70 gradient-border-wrapper-${
                  index + 1
                }`}
                style={{
                  // @ts-expect-error
                  '--bg-image': isProjectPage ? `url(${hero.src})` : '',
                }}
              >
                <Link
                  href={link.link}
                  className={`gradient-text-${
                    index + 1
                  } block w-full px-6 py-1`}
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
        className={`bg-af-dark lg:hidden ${
          isOpen ? '' : 'hidden translate-x-full opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        onClick={toggleMenu}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-af-dark p-4 md:p-8">
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
