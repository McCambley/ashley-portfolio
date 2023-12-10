import Image from 'next/image';
import ashleyHeadshot from '~/ashley_nh.png';

function Hero() {
  return (
    <section className="mx-auto flex w-full flex-col items-center md:flex-row">
      <div className="mb-6 w-full md:w-1/2">
        <h1 className="font-handwriting">Hi, I&apos;m Ashley</h1>
        <p className="font-body text-3xl gradient-text">
          I&apos;m a UI/UX designer with a love for blending beauty and
          functionality. I aim to bring vibrant design and intuitive user
          experience to all facets of the human experience.
        </p>
      </div>
      <div className="flex w-full place-content-center px-8 md:w-1/2">
        <Image
          src={ashleyHeadshot.src}
          height={400}
          width={400}
          alt="Ashley in Alaska"
          className="rounded-full p-1 bg-gradient"
        />
      </div>
    </section>
  );
}

export default Hero;
