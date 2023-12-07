import Header from '@/components/Header';
import Image from 'next/image';
import gradient from '../../public/gradient_main.png';
import ashleyHeadshot from '~/ashley_ak.png';
import { nothingYouCouldDo } from './fonts';

export default function Home() {
  return (
    <section className="mx-auto flex items-center">
      <div className="w-1/2">
        <h1 className={`${nothingYouCouldDo.className}`}>Hi, I'm Ashley</h1>
        <p className="gradient-text text-4xl">
          I am a UI/UX Designer who believes there is beauty in the most
          desolate of places. The coldest and darkest nights end in the most
          beautiful sunrise. My aim is to bring beauty to the far reaches of the
          world.
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
  );
}
