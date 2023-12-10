import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <section>
      <div className="mb-8 flex flex-col items-center">
        <Image
          src="/ashley_nh.png"
          width={100}
          height={100}
          alt="Ashley's Headshot"
        />
        <div>
          <p>Ashley Fife Design</p>
          <p>UI/UX Designer</p>
        </div>
      </div>
      {/* A container containing three Links that are all call to actoins. "Hire me" "View Work" and "Contact Me" */}
      <div className="flex justify-center">
        <Link
          href="/about"
          className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow"
        >
          Contact
        </Link>
        <Link
          href="/resume"
          className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow"
        >
          Resume
        </Link>
        <Link
          href={'/freelance'}
          className="max-w-[22rem] rounded-full border-4 border-af-yellow px-8 py-3 text-3xl text-af-yellow"
        >
          Freelance
        </Link>
      </div>
      <Image src={'/linkedin.svg'} width={80} height={80} alt="linkedin" />
    </section>
  );
}

export default Footer;
