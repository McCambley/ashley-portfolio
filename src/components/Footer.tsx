import Image from 'next/image';
import Link from 'next/link';
import GradientBorder from './GradientBorder';

const Links = [
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
  {
    title: 'Resume',
    url: '/resume',
  },
  {
    title: 'Freelance',
    url: '/freelance',
  },
];

function Footer() {
  return (
    <footer className="overlay bg-gradient p-16">
      <div>
        <div className="mb-8 flex flex-col items-center justify-center gap-8 md:flex-row">
          <GradientBorder className="mx-auto mb-6 w-1/2 rounded-full md:mx-0 md:max-w-[220px] ">
            <Image
              width={1600}
              height={900}
              src="/ashley_nh.png"
              alt="Ashley's Headshot"
              className=" aspect-square rounded-full object-cover "
            />
          </GradientBorder>
          <div className="text-center text-4xl">
            <p className="font-handwriting text-5xl">Ashley Fife Design</p>
            <p className="text-3xl">UI/UX Designer</p>
          </div>
        </div>
        {/* A container containing three Links that are all call to actoins. "Hire me" "View Work" and "Contact Me" */}
        <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-4 text-lg md:flex-row">
          {Links.map(link => (
            <Link
              href={link.url}
              key={link.title}
              className="w-full min-w-[140px] max-w-[180px] rounded-full border-2 border-white px-6 py-1 text-center text-white transition-all hover:bg-white hover:text-af-yellow md:w-auto md:max-w-none"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Link
          href="https://www.linkedin.com"
          className="mx-auto flex justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={'/linkedin.svg'}
            width={40}
            height={40}
            alt="linkedin"
            className="transition-all hover:opacity-50"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
