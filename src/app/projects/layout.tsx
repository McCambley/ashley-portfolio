import type { Metadata } from 'next';
import '../globals.css';
import { body, mono, heading, handwriting } from '../fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Ashley Fife',
  description: 'Ashley Fife is a Designer based in New Hampshire',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
      {/* <ContactForm /> */}
    </>
  );
}
