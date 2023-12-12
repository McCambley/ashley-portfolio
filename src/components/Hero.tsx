import Image from 'next/image';
import ashleyHeadshot from '~/ashley_nh.png';
import GradientBorder from './GradientBorder';

function Hero() {
  return (
    <section className="mx-auto flex w-full flex-col items-center md:flex-row">
      <div className="mb-6 w-full md:w-1/2">
        <h1 className="mb-4 w-full text-center font-handwriting md:mb-auto md:text-left">
          Hi, I&apos;m Ashley
        </h1>
        <GradientBorder className="mx-auto mb-6 w-fit rounded-full md:hidden">
          <Image
            src={ashleyHeadshot.src}
            height={400}
            width={400}
            alt="Ashley in Alaska"
            className="rounded-full md:hidden"
          />
        </GradientBorder>
        <p className="font-body text-3xl gradient-text">
          I&apos;m a UI/UX designer with a love for blending beauty and
          functionality. I aim to bring vibrant design and intuitive user
          experience to all facets of the human experience.
        </p>
      </div>
      <div className="flex w-full place-content-center px-8 md:w-1/2">
        <GradientBorder className="rounded-full">
          <Image
            src={ashleyHeadshot.src}
            height={400}
            width={400}
            alt="Ashley in Alaska"
            className="hidden rounded-full md:flex"
          />
        </GradientBorder>
      </div>
    </section>
  );
}

export default Hero;
