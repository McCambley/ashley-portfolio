import Image from 'next/image';
import ashleyHeadshot from '~/ashley_nh.png';
import GradientBorder from './GradientBorder';
import Link from 'next/link';
import BabyBurst from './BabyBurst';

function Hero() {
  return (
    <section className="pad-top mx-auto flex min-h-[68vh] w-full max-w-[1080px] flex-col items-center md:flex-row">
      <div className="mb-6 w-full md:w-1/2">
        <h1 className="mb-4 w-full text-center font-handwriting md:mb-8 md:text-left">
          Hi!{' '}
          <BabyBurst inline translateY={-25} translateX={-50} pixels={600} />
          <span>I&apos;m Ashley</span>
        </h1>
        <Image
          src={ashleyHeadshot.src}
          height={340}
          width={340}
          alt="Ashley in Alaska"
          className="mx-auto mb-6 rounded-full md:hidden"
          priority
        />
        <p className="text-center font-body text-2xl text-af-light md:mb-8 md:text-left">
          I&apos;m a UI/UX designer with a love for blending beauty and
          functionality. I aim to bring vibrant design and intuitive user
          experience to all facets of the human experience.
        </p>
        <div className="flex justify-center gap-4 pt-6 text-lg text-af-light md:justify-start">
          <Link
            className=" border-af-polar block rounded-full border px-8 py-1 text-center font-heading transition-all hover:opacity-70"
            href="#projects"
          >
            My Work
          </Link>
          <Link
            className=" border-af-polar block rounded-full border px-8 py-1 text-center font-heading transition-all hover:opacity-70"
            href="/contact"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </div>
      <div className="flex w-full place-content-center px-8 md:w-1/2">
        <BabyBurst translateX={-18} translateY={-16} pixels={600} />
        <Image
          src={ashleyHeadshot.src}
          height={400}
          width={400}
          alt="Ashley in Alaska"
          className="hidden rounded-full md:flex"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
