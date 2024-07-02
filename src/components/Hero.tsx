import Image from 'next/image';
import ashleyHeadshot from '~/ashley_nh.png';
import GradientBorder from './GradientBorder';
import Link from 'next/link';
import BabyBurst from './BabyBurst';

function Hero() {
  return (
    <section className="pad-top mx-auto flex min-h-[100vh] w-full max-w-[1080px] flex-col items-center md:flex-row md:py-0">
      <div className="mb-6 w-full md:w-[55%]">
        <h1 className="mb-2 w-full text-center font-handwriting md:mb-2 md:text-left">
          Hi! <BabyBurst inline translateY={-25} translateX={-50} />
          <span>I&apos;m Ashley</span>
        </h1>
        <div className="flex w-full items-center justify-center md:hidden">
          <BabyBurst
            translateX={-50}
            translateY={0}
            // inline
          />
        </div>
        <Image
          src={ashleyHeadshot.src}
          height={300}
          width={300}
          alt="Ashley in Alaska"
          className="mx-auto mb-6 rounded-full md:hidden"
          priority
        />
        <p className="mb-8 text-center font-body text-2xl text-af-light md:text-left">
          I&apos;m a UI/UX designer with a love for blending beauty and
          functionality. I aim to bring vibrant design and intuitive user
          experience to all facets of the human experience.
        </p>
        <div className="flex justify-center gap-5 text-af-light md:justify-start">
          <Link
            className=" block rounded-full border border-af-polar px-8 py-3 text-center font-heading transition-all hover:opacity-70"
            href="/#projects"
          >
            My Work
          </Link>
          <Link
            className=" block rounded-full border border-af-polar px-8 py-3 text-center font-heading transition-all hover:opacity-70"
            href="/contact"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </div>
      <div className="flex w-full place-content-center px-8 md:w-[45%]">
        <BabyBurst
          translateX={0}
          translateY={0}
          wrapperStyle="hidden md:block"
        />
        <Image
          src={ashleyHeadshot.src}
          height={300}
          width={300}
          alt="Ashley in Alaska"
          className="hidden rounded-full md:flex"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
