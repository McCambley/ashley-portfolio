import Image from 'next/image';
import ashleyHeadshot from '~/ashley_nh.png';
import GradientBorder from './GradientBorder';
import Link from 'next/link';

function Hero() {
  return (
    <section className="pad-top mx-auto flex min-h-[68vh] w-full flex-col items-center md:flex-row">
      <div className="mb-6 w-full md:w-1/2">
        {/* The only handwriting element around */}
        <h1 className="mb-4 w-full text-center font-handwriting md:mb-auto md:text-left">
          Hi! <span className="gradient-text">I&apos;m Ashley</span>
        </h1>
        {/* <GradientBorder className=""> */}
        <Image
          src={ashleyHeadshot.src}
          height={340}
          width={340}
          alt="Ashley in Alaska"
          className="mx-auto mb-6 rounded-full md:hidden"
          priority
        />
        {/* </GradientBorder> */}
        <p className="text-af-light text-center font-body text-2xl md:text-left">
          I&apos;m a UI/UX designer with a love for blending beauty and
          functionality. I aim to bring vibrant design and intuitive user
          experience to all facets of the human experience.
        </p>
        <div className="text-af-light flex justify-center gap-4 pt-6 text-lg md:justify-start">
          <Link
            className=" border-af-light block rounded-full border px-8 py-2 text-center font-heading transition-all hover:opacity-70"
            href="#projects"
          >
            My Work
          </Link>
          <Link
            className=" border-af-light block rounded-full border px-8 py-2 text-center font-heading transition-all hover:opacity-70"
            href="/contact"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </div>
      <div className="flex w-full place-content-center px-8 md:w-1/2">
        <Image
          src={ashleyHeadshot.src}
          height={340}
          width={340}
          alt="Ashley in Alaska"
          className="hidden rounded-full md:flex"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
