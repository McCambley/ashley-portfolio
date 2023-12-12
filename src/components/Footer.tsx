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
    <section className="overlay p-16 bg-gradient">
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
        <div className="mb-8 flex flex-col flex-wrap justify-center gap-4 text-xl md:flex-row">
          {Links.map(link => (
            <Link
              href={link.url}
              key={link.title}
              className="min-w-[140px] rounded-full border-2 border-white px-7 py-2 text-center text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Image
          src={'/linkedin.svg'}
          width={40}
          height={40}
          alt="linkedin"
          className="mx-auto"
        />
      </div>
    </section>
  );
}

export default Footer;
