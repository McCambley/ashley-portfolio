import Image from 'next/image';
import Link from 'next/link';
import GradientBorder from './GradientBorder';

const Links = [
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'My Work',
    url: '/#projects',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
  {
    title: 'Resume',
    url: '/Ashley_Fife_Resume.pdf',
  },
  {
    title: 'Services',
    url: '/services',
  },
];

function Footer() {
  return (
    <footer className="p-16">
      <div>
        <div className="mb-2 flex flex-col items-center justify-center gap-8 md:flex-row">
          <Image
            width={1600}
            height={900}
            src="/ashley_nh.png"
            alt="Ashley's Headshot"
            className=" mx-auto mb-6 aspect-square w-1/2 rounded-full object-cover md:mx-0 md:max-w-[192px]"
          />
          <div className="text-center text-5xl text-af-light">
            <p className="font-body font-medium">Ashley Fife</p>
            <p className="font-medium">UI/UX Designer</p>
          </div>
        </div>
        {/* A container containing three Links that are all call to actoins. "Hire me" "View Work" and "Contact Me" */}
        <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-8 text-lg md:flex-row">
          {Links.map(link => (
            <Link
              href={link.url}
              key={link.title}
              className="w-full min-w-[140px] max-w-[180px] rounded-full border-2 border-af-polar px-8 py-3 text-center font-heading text-af-light transition-all hover:bg-white hover:text-af-dark md:w-auto md:max-w-none"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Link
          href="https://www.linkedin.com/in/ashley-fife-8204a7283/"
          className="mx-auto flex justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={'/linkedin.svg'}
            width={40}
            height={40}
            alt="linkedin"
            className="transition-all hover:opacity-70"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
