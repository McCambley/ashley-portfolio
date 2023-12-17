import Skills from '@/components/Skills';
import Image from 'next/image';
import GradientBorder from '@/components/GradientBorder';
import ContactForm from '@/components/ContactForm';
import SectionIntro from '@/components/SectionIntro';

const paragraphs = [
  {
    imageSrc: '/ashley_ak.png',
    alt: 'Ashley in Alaska',
    text: `When I finished my bachelors degree in Counseling Psychology, I longed to go to do unconventional jobs in unconventional places. I spent a decade doing seasonal manual labor in New Hampshire, Greenland, Alaska, and Antarctica in the pursuit of land stewardship and supporting science.`,
  },
  {
    imageSrc: '/ashley_greenland.png',
    alt: 'Ashley in Greenland',
    text: `After many years of ice and snow, I felt it was time to pursue a new horizon. The transition from physical to digital landscapes ignited a newfound passion within me. I found a career that could live between the world of tech and my passions such as science, conservation, or psychology.`,
  },
  {
    imageSrc: '/ashley_ice.png',
    alt: 'Ashley in Antarctica',
    text: `Through the lens of my diverse experiences, I bring a unique perspective to design, branding, and user testing by combining discipline with creativity.`,
  },
];

export default function About() {
  return (
    <div className="pad-top">
      <section>
        <SectionIntro
          title="About Me"
          subtitle="UI/UX and Web Designer, Brand Elevator, Outdoor Enthusiast, Globe Trotter"
        />
        <GradientBorder className="flex flex-col items-center rounded-lg p-4 md:p-8 lg:px-16">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex w-full flex-col items-center gradient-text md:w-1/2">
              {paragraphs.map(({ text, imageSrc, alt }) => (
                <>
                  <GradientBorder className="mb-8 w-fit rounded-full md:hidden">
                    <Image
                      src={imageSrc}
                      alt={alt}
                      width={200}
                      height={200}
                      className="rounded-full"
                    />
                  </GradientBorder>
                  <p
                    className="mb-8 text-center text-lg md:text-left md:text-2xl"
                    key={imageSrc}
                  >
                    {text}
                  </p>
                </>
              ))}
            </div>
            <div className="hidden w-full items-center justify-center md:flex md:w-1/2">
              <div className="relative  h-full max-h-[800px] w-full max-w-[400px] items-start justify-center">
                <div className="absolute left-[50%] top-[0%]">
                  {/* Top right */}
                  <GradientBorder className="h-auto rounded-full">
                    <Image
                      src={'/ashley_ak.png'}
                      alt="Ashley in Alaska"
                      width={300}
                      height={300}
                      className="rounded-full"
                    />
                  </GradientBorder>
                </div>
                <div className="absolute left-[0%] top-[25%]">
                  {/* Middle left */}
                  <GradientBorder className="h-auto rounded-full">
                    <Image
                      src={'/ashley_greenland.png'}
                      alt="Ashley in Alaska"
                      width={350}
                      height={350}
                      className="rounded-full"
                    />
                  </GradientBorder>
                </div>
                <div className="absolute left-[50%] top-[70%]">
                  {/* Bottom right */}
                  <GradientBorder className="h-auto rounded-full">
                    <Image
                      src={'/ashley_ice.png'}
                      alt="Ashley in Alaska"
                      width={300}
                      height={300}
                      className="rounded-full"
                    />
                  </GradientBorder>
                </div>
              </div>
            </div>
          </div>
        </GradientBorder>
      </section>
      <Skills />
      <ContactForm className="mb-16" showSubtitle={true} />
    </div>
  );
}
