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
          <div className="flex w-full flex-col justify-center gap-5 pt-8 font-bold text-af-dark sm:flex-row sm:gap-8 [&_a]:mx-auto [&_a]:w-full  [&_a]:min-w-[220px] sm:[&_a]:mx-0 sm:[&_a]:max-w-[240px]">
            <GradientBorder className="rounded-full">
              <Link
                href={'#contact'}
                className="flex items-center justify-center px-7 py-2 font-heading text-lg transition-all  gradient-text hover:opacity-70"
              >
                Contact me
              </Link>
            </GradientBorder>
            <Link href="/projects">
              <GradientBorder className="w-full rounded-full px-7 py-2 text-lg transition-all gradient-text hover:opacity-70">
                <span className="block w-full text-center font-heading gradient-text">
                  View my work
                </span>
              </GradientBorder>
            </Link>
          </div>
        </SectionIntro>
        <GradientBorder className="mb-8 flex w-full flex-col items-center justify-center rounded-lg p-4 md:p-10">
          <p className="mb-4 w-full text-center font-heading text-4xl gradient-text">
            Specialization
          </p>
          <Image
            src="/services_target.svg"
            width={75}
            height={75}
            alt="Target"
            className="mb-4"
          />
          <p className="text-center text-2xl gradient-text">
            My expertise includes Website Design, UI/UX Design, Branding, and
            User Experience optimization to bring more customers to your site.
          </p>
        </GradientBorder>
        <div className=" flex flex-col justify-center gap-8 lg:flex-row">
          <GradientBorder className="flex w-full flex-col justify-start rounded-lg p-4 md:p-10">
            <p className="mb-4 w-full text-center font-heading text-4xl gradient-text">
              What to Expect
            </p>
            <Image
              src="/services_handshake.svg"
              width={75}
              height={75}
              alt="Target"
              className="mx-auto mb-4"
            />
            <p className="text-center text-2xl gradient-text lg:text-left">
              You can expect clear communication, timely updates, and a
              high-quality end product. I prioritize client satisfaction and
              will work closely with you to ensure that your project meets your
              expectations.
            </p>
          </GradientBorder>
          <GradientBorder className="flex w-full flex-col justify-start rounded-lg p-4 md:p-10">
            <p className="mb-4 w-full text-center font-heading text-4xl gradient-text">
              Payment
            </p>
            <Image
              src="/services_payment.svg"
              width={75}
              height={75}
              alt="Target"
              className="m-auto mb-4"
            />
            <p className="text-center text-2xl gradient-text lg:text-left">
              I accept payments through various methods, including Venmo, bank
              transfers, and checks. Once we agree on the project scope and
              cost, I&apos;ll provide you with an invoice. Payment terms and
              methods will be discussed and agreed upon before the project
              begins.
            </p>
          </GradientBorder>
        </div>
      </section>
      <ContactForm
        className="mb-24 max-w-[1024px] md:pt-0"
        standalone={false}
      />
    </>
  );
}
