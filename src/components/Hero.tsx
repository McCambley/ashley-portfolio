import Image from 'next/image';
import ashleyHeadshot from '~/ashley_nh.png';
import GradientBorder from './GradientBorder';

function Hero() {
  return (
    <section className="pad-top mx-auto flex min-h-screen w-full flex-col items-center md:flex-row">
      <div className="mb-6 w-full md:w-1/2">
        <h1 className="mb-4 w-full text-center font-handwriting md:mb-auto md:text-left">
          Hi, I&apos;m Ashley
        </h1>
        <GradientBorder className="mx-auto mb-6 max-w-fit rounded-full md:hidden">
          <Image
            src={ashleyHeadshot.src}
            height={400}
            width={400}
            alt="Ashley in Alaska"
            className="rounded-full md:hidden"
            priority
          />
        </GradientBorder>
        <p className="text-center font-body text-2xl gradient-text md:text-left">
          I&apos;m a UI/UX designer with a love for blending beauty and
          functionality. I aim to bring vibrant design and intuitive user
          experience to all facets of the human experience.
        </p>
      </div>
      <div className="flex w-full place-content-center px-8 md:w-1/2">
        <GradientBorder className="hidden rounded-full md:flex">
          <Image
            src={ashleyHeadshot.src}
            height={400}
            width={400}
            alt="Ashley in Alaska"
            className="hidden rounded-full md:flex"
            priority
          />
        </GradientBorder>
      </div>
    </section>
  );
}

export default Hero;
