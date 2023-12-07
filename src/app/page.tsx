import Header from '@/components/Header';
import Image from 'next/image';
import gradient from '../../public/gradient_main.png';
import ashleyHeadshot from '~/ashley_ak.png';
import { nothingYouCouldDo } from './fonts';
import chair from '~/project_chair.png';
import bike from '~/project_bike.png';
import cafe from '~/project_cafe.png';
import dorthy from '~/project_dorthy.png';
import perkins from '~/project_perkins.png';

interface Project {
  title: string;
  description: string;
  callToAction: string;
  link: string;
  src: string;
}

const project: Project[] = [
  {
    title: 'Sit conmigo Mobile Website',
    description: 'How can we create get an intuitive checkout process?',
    callToAction: 'Case Study',
    link: 'https://jakemccambley.com',
    src: chair.src,
  },
  {
    title: 'City Cycles Online Bike Rental',
    description: 'How can we create a user-friendly rental experience?',
    callToAction: 'Case Study',
    link: 'https://jakemccambley.com',
    src: bike.src,
  },
  {
    title: 'Midnight Brew Coffee Shop Style Guide',
    description: 'How can we create a brand new coffee shop?',
    callToAction: 'Case Study',
    link: 'https://jakemccambley.com',
    src: cafe.src,
  },
  {
    title: 'Dorthy Delong Photography Portfolio',
    description: "How can we showcase an artist's work?",
    callToAction: 'Prototype',
    link: 'https://jakemccambley.com',
    src: dorthy.src,
  },
  {
    title: 'Perkins Grief Counseling Website Update',
    description:
      'How can we create get an intuitive checkout process for eco-conscious buyers?',
    callToAction: 'Website',
    link: 'https://jakemccambley.com',
    src: perkins.src,
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex items-center">
        <div className="w-1/2">
          <h1 className={`${nothingYouCouldDo.className}`}>
            Hi, I&apos;m Ashley
          </h1>
          <p className="gradient-text text-4xl">
            I am a UI/UX Designer who believes there is beauty in the most
            desolate of places. The coldest and darkest nights end in the most
            beautiful sunrise. My aim is to bring beauty to the far reaches of
            the world.
          </p>
        </div>
        <div className="flex w-1/2 place-content-center px-8">
          <Image
            src={ashleyHeadshot.src}
            height={400}
            width={400}
            alt="Ashley in Alaska"
            className="bg-gradient rounded-full p-4"
            // className="object-cover object-center"
          />
        </div>
      </section>
      <section>
        <h2 className={`w-full text-center ${nothingYouCouldDo.className}`}>
          My Work
        </h2>
        {project.map(project => {
          return (
            <div
              key={project.title}
              className="border-af-yellow mx-auto mb-12 flex w-full max-w-4xl overflow-hidden rounded-xl border-4"
            >
              <div className="flex w-1/2 flex-col justify-between p-6">
                <h3 className={`gradient-text ${nothingYouCouldDo.className}`}>
                  {project.title}
                </h3>
                <p className="gradient-text pb-10 text-4xl">
                  {project.description}
                </p>
                <button className="border-af-yellow max-w-[12rem] rounded-full border-4 px-2 py-1">
                  View {project.callToAction}
                </button>
              </div>
              <div className="relative flex w-1/2 items-center justify-end">
                <Image
                  src={project.src}
                  width={400}
                  height={500}
                  alt={project.title}
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
