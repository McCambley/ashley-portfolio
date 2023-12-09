import {
  Dancing_Script as Handwriting,
  Dancing_Script as Heading,
  Roboto_Slab as Body,
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
  weight: '400',
});
export const mono = Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
});
