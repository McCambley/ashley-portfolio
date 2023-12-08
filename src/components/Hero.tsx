import React from 'react';
import Image from 'next/image';
import ashleyHeadshot from '~/ashley_nh.png';

function Hero() {
  return (
    <section className="mx-auto flex items-center">
      <div className="w-1/2">
        <h1 className="font-handwriting">Hi, I&apos;m Ashley</h1>
        <p className="font-body text-3xl gradient-text">
          I&apos;m a UI/UX designer with a love for blending beauty and
          functionality. I aim to bring vibrant design and intuitive user
          experience to all facets of the human experience.
        </p>
      </div>
      <div className="flex w-1/2 place-content-center px-8">
        <Image
          src={ashleyHeadshot.src}
          height={400}
          width={400}
          alt="Ashley in Alaska"
          className="rounded-full p-2 bg-gradient"
        />
      </div>
    </section>
  );
}

export default Hero;
