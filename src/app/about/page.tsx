import Skills from '@/components/Skills';
import Image from 'next/image';
import GradientBorder from '@/components/GradientBorder';
import ContactForm from '@/components/ContactForm';
import SectionIntro from '@/components/SectionIntro';
import BabyBurst from '@/components/BabyBurst';

const paragraphs = [
  {
    imageSrc: '/ashley_ak.png',
    alt: 'Ashley in Alaska',
    text: 'Through a lens of my diverse experiences, I bring a unique perspective to design, branding, and user testing.',
  },
  {
    imageSrc: '/ashley_greenland.png',
    alt: 'Ashley in Greenland',
    text: 'When I finished my bachelors degree in Counseling Psychology, I longed to go to do unconventional jobs in unconventional places. I spent a decade doing seasonal manual labor in New Hampshire, Greenland, Alaska, and Antarctica in the pursuit of land stewardship and supporting science.',
  },
  {
    imageSrc: '/ashley_ice.png',
    alt: 'Ashley in Antarctica',
    text: 'After many years of ice and snow, I felt it was time to pursue a new horizon. The transition from physical to digital landscapes ignited a newfound passion. I found a career that could live between the world of tech and my passions such as science, conservation, or psychology.',
  },
];

export default function About() {
  return (
    <div>
      <section className="pad-top">
        <SectionIntro title="About Me" onPage />
        <BabyBurst
          translateX={-0}
          translateY={-50}
          wrapperStyle="hidden md:block"
        />
        <div className="flex w-full flex-col items-center rounded-lg">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex w-full flex-col items-center text-af-light md:w-1/2">
              {paragraphs.map(({ text, imageSrc, alt }) => (
                <>
                  <BabyBurst
                    translateX={-50}
                    translateY={0}
                    width={200}
                    height={200}
                    wrapperStyle="md:hidden"
                  />
                  <Image
                    src={imageSrc}
                    alt={alt}
                    width={200}
                    height={200}
                    className="mb-8 rounded-full md:hidden"
                  />
                  <p
                    className="mb-8 text-center text-lg md:text-left md:text-xl"
                    key={imageSrc}
                  >
                    {text}
                  </p>
                </>
              ))}
            </div>
            <div className="hidden w-full items-center justify-center md:flex md:w-1/2">
              <div className="relative  h-full max-h-[800px] w-full max-w-[400px] items-start justify-center">
                <BabyBurst
                  translateX={25}
                  translateY={32}
                  wrapperStyle="hidden md:block"
                />
                <Image
                  src={'/about_pics.png'}
                  alt="Ashley in the world"
                  width={900}
                  height={1600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <ContactForm className="mb-16" standalone={false} />
    </div>
  );
}
