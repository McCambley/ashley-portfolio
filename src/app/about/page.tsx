import React from 'react';
import Skills from '@/components/Skills';
import Image from 'next/image';

const paragraphs = [
  `When I finished my bachelors degree in Counseling Psychology, I longed to go to do unconventional jobs in unconventional places. I spent a decade doing seasonal manual labor in New Hampshire, Greenland, Alaska, and Antarctica in the pursuit of land stewardship and supporting science.`,
  `After many years of ice and snow, I felt it was time to pursue a new horizon. The transition from physical to digital landscapes ignited a newfound passion within me. I found a career that could live between the world of tech and my passions such as science, conservation, or psychology.`,
  `Through the lens of my diverse experiences, I bring a unique perspective to design, branding, and user testing by combining discipline with creativity.`,
];

export default function About() {
  return (
    <div>
      <section>
        <h1>About Me</h1>
        <div>
          {paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <Image
            src={'/ashley_ak.png'}
            alt="Ashley in Alaska"
            width={200}
            height={200}
          />
          <Image
            src={'/ashley_greenland.png'}
            alt="Ashley in Alaska"
            width={200}
            height={200}
          />
          <Image
            src={'/ashley_ice.png'}
            alt="Ashley in Alaska"
            width={200}
            height={200}
          />
        </div>
      </section>
      <Skills />
    </div>
  );
}
