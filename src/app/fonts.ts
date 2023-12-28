import {
  Dancing_Script as Handwriting,
  Raleway as Heading,
  Lato as Body,
  Montserrat as Mono,
} from 'next/font/google';

export const handwriting = Handwriting({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handwriting',
});
export const heading = Heading({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
});
export const body = Body({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['100', '300', '400', '700', '900'],
});
export const mono = Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
});
