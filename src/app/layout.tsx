import type { Metadata } from 'next';
import './globals.css';
import { body, mono, heading, handwriting } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${mono.variable} ${body.variable} ${heading.variable} ${handwriting.variable} mx-auto bg-af-dark font-body`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
