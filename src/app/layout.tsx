import type { Metadata } from 'next';
import './globals.css';
import { body, mono, heading, handwriting } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body
        className={`${mono.variable} ${body.variable} ${heading.variable} ${handwriting.variable} mx-auto max-w-screen-xl bg-dark font-body font-extralight text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
