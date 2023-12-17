import { useState, useEffect } from 'react';
export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detect if window is scrolled past on page load
    // const isScrolled = window.scrollY > 0;
    // if (isScrolled) {
    //   setIsScrolled(true);
    // }
    const handleScroll = () => {
      // Set state based on scroll position
      setIsScrolled(window.scrollY > 100);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [isScrolled];
}
