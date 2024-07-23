import BabyBurst from '@/components/BabyBurst';
import ContactForm from '@/components/ContactForm';
import GradientBorder from '@/components/GradientBorder';
import SectionIntro from '@/components/SectionIntro';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <section className="pad-top mb-16 flex max-w-[1024px] flex-col items-center">
        <SectionIntro
          title="Design Services"
          subtitle="Let me help you elevate your business's digital presence. I am
passionate about crafting your stunning new website or giving your old
site a modern remodel."
        >
          <div className="flex w-full flex-col justify-center gap-5 pt-8 font-bold text-af-light sm:flex-row sm:gap-8 [&_a]:mx-auto [&_a]:w-fit  [&_a]:min-w-[0px] sm:[&_a]:mx-0 sm:[&_a]:max-w-[11110px]">
            <Link
              href={'#contact'}
              className="flex items-center justify-center rounded-full border border-af-polar px-8 py-3 font-heading text-base font-normal text-af-light  transition-all hover:opacity-70"
            >
              Contact me
            </Link>
            <Link
              href="/#projects"
              className="block w-full rounded-full border border-af-polar px-8 py-3 text-center font-heading text-base font-normal text-af-light transition-all hover:opacity-70"
            >
              View my work
            </Link>
          </div>
        </SectionIntro>
        <div className="flex flex-row flex-wrap justify-center gap-6 pt-[4.5rem] [&_div]:max-w-[312px] [&_div_div]:min-h-[36rem] [&_div_div]:max-w-[312px] [&_div_div]:p-8 [&_div_ul]:ml-3 ">
          <div className="">
            <BabyBurst width={316} height={316} translateY={-15} />

            <div className="flex w-full flex-col justify-start rounded-xl bg-af-dark">
              <p className="mb-6  w-full text-center font-heading text-3xl text-af-light">
                Specialization
              </p>
              <Image
                src="/services_target.svg"
                width={75}
                height={75}
                alt="Target"
                className="mx-auto mb-5"
              />
              <ul className="list-disc pl-4 text-xl text-af-light">
                <li>Website Design</li>
                <li>UI/UX Design</li>
                <li>Branding</li>
                <li>User Experience</li>
                <li>I aim to optimize your site to attract more users</li>
              </ul>
            </div>
          </div>
          <div className="">
            <BabyBurst width={316} height={316} translateY={-15} />

            <div className="flex w-full flex-col justify-start  rounded-xl bg-af-dark">
              <p className="mb-6  w-full text-center font-heading text-3xl text-af-light">
                What to Expect
              </p>
              <Image
                src="/services_handshake.svg"
                width={75}
                height={75}
                alt="Target"
                className="mx-auto mb-5"
              />
              <ul className="list-disc pl-4 text-xl text-af-light">
                <li>Clear communication</li>
                <li>Timely updates</li>
                <li>High-quality end product</li>
                <li>client satisfaction</li>
              </ul>
            </div>
          </div>
          <div className="">
            <BabyBurst width={316} height={316} translateY={-15} />

            <div className="flex w-full flex-col justify-start rounded-xl bg-af-dark">
              <p className="mb-6  w-full text-center font-heading text-3xl text-af-light">
                How to Pay Me
              </p>
              <Image
                src="/services_payment.svg"
                width={75}
                height={75}
                alt="Target"
                className="mx-auto mb-5"
              />
              <ul className="list-disc pl-4 text-xl text-af-light">
                <li>Venmo, cash, and check</li>
                <li>
                  Invoice provided after project agreement has been signed
                </li>
                <li>
                  Payment terms and methods will be discussed and agreed upon
                  before the project begins
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactForm className="mb-24 max-w-[1024px] md:pt-0" />
    </>
  );
}
