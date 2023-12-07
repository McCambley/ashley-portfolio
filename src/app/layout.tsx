import type { Metadata } from 'next';
import './globals.css';
import { raleway } from './fonts';
import Header from '@/components/Header';

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
        className={`${raleway.className} bg-dark mx-auto max-w-screen-xl text-white`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
