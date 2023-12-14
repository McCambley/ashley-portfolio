import ContactForm from '@/components/ContactForm';
import GradientBorder from '@/components/GradientBorder';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <section className="flex max-w-[1024px] flex-col items-center">
        {/* <GradientBorder className="mb-32 flex w-full flex-col items-center justify-center rounded-lg px-16 py-32"> */}
        <h1 className="mb-8 w-full text-center font-handwriting">
          Design Services
        </h1>
        <p className="mb-8 text-center text-2xl gradient-text">
          Let me help you elevate your business&apos;s digital presence. I am
          passionate about crafting your stunning new website or giving your old
          site a modern remodel.
        </p>
        {/* </GradientBorder> */}
        <div className="mb-16 flex w-full flex-col justify-center gap-5 font-bold text-af-dark sm:flex-row sm:gap-8 [&_a]:mx-auto [&_a]:min-w-[220px] [&_a]:max-w-[240px] sm:[&_a]:mx-0 md:[&_a]:max-w-none">
          <Link
            href={'#contact'}
            className="bg-gradient-button m-[-2px] flex items-center justify-center rounded-full px-7 py-2 text-lg text-af-dark transition-all hover:opacity-70"
          >
            Contact me
          </Link>
          <Link href="/projects">
            <GradientBorder className="w-full rounded-full px-7 py-2 text-lg transition-all gradient-text hover:opacity-70">
              <span className="block w-full text-center gradient-text">
                View my work
              </span>
            </GradientBorder>
          </Link>
        </div>
        <GradientBorder className="mb-8 flex w-full flex-col items-center justify-center rounded-lg p-4 md:p-10">
          <h2 className="mb-0 w-full text-center font-heading">
            Specialization
          </h2>
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
            <h2 className="mb-0 w-full text-center font-heading">
              What to Expect
            </h2>
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
            <h2 className="mb-0 w-full text-center font-heading">Payment</h2>
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
      {/* <GradientBorder className="m-auto max-w-[200px] rounded-full ">
        {null}
      </GradientBorder> */}
      <ContactForm className="max-w-[1024px] md:pt-0" />
    </>
  );
}
