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
          {/* <div className="flex w-full flex-col justify-center gap-5 pt-8 font-bold text-af-light sm:flex-row sm:gap-8 [&_a]:mx-auto [&_a]:w-full  [&_a]:min-w-[220px] sm:[&_a]:mx-0 sm:[&_a]:max-w-[240px]">
            <Link
              href={'#contact'}
              className="white-border flex items-center justify-center rounded-full px-7 py-2 font-heading text-lg text-af-light  transition-all hover:opacity-70"
            >
              Contact me
            </Link>
            <Link href="/#projects">
              <span className="white-border block w-full rounded-full px-7 py-2 text-center font-heading text-lg text-af-light transition-all hover:opacity-70">
                View my work
              </span>
            </Link>
          </div> */}
        </SectionIntro>
        <div className=" flex flex-col justify-center gap-8 lg:flex-row">
          <div className="mb-8 flex w-full flex-col items-center justify-start rounded-lg p-4 md:p-3">
            <p className="mb-4 min-h-[80px] w-full text-center font-heading text-4xl text-af-light">
              Specialization
            </p>
            <Image
              src="/services_target.svg"
              width={75}
              height={75}
              alt="Target"
              className="mx-auto mb-10"
            />
            <ul className="list-disc pl-4 text-2xl font-light text-af-light">
              <li>Website Design</li>
              <li>UI/UX Design</li>
              <li>Branding</li>
              <li>User Experience</li>
              <li>I aim to optimize your site to attract more users</li>
            </ul>
          </div>
          <div className="flex w-full flex-col justify-start rounded-lg p-4 md:p-3">
            <p className="mb-4 min-h-[80px] w-full text-center font-heading text-4xl text-af-light">
              What to Expect
            </p>
            <Image
              src="/services_handshake.svg"
              width={75}
              height={75}
              alt="Target"
              className="mx-auto mb-10"
            />
            <ul className="list-disc pl-4 text-2xl font-light text-af-light">
              <li>Clear communication</li>
              <li>Timely updates</li>
              <li>High-quality end product</li>
              <li>client satisfaction</li>
            </ul>
          </div>
          <div className="flex w-full flex-col justify-start rounded-lg p-4 md:p-3">
            <p className="mb-4 min-h-[80px] w-full text-center font-heading text-4xl text-af-light">
              How to Pay Me
            </p>
            <Image
              src="/services_payment.svg"
              width={75}
              height={75}
              alt="Target"
              className="mx-auto mb-10"
            />
            <ul className="list-disc pl-4 text-2xl font-light text-af-light">
              <li>Venmo, cash, and check</li>
              <li>Invoice provided after project agreement has been signed</li>
              <li>
                Payment terms and methods will be discussed and agreed upon
                before the project begins
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ContactForm
        className="mb-24 max-w-[1024px] md:pt-0"
        standalone={false}
      />
    </>
  );
}
