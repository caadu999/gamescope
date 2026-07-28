import { Geist, Anton, VT323 } from 'next/font/google';
import localFont from 'next/font/local';

export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
});

export const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
export const VT = VT323({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const suisse = localFont({
  src: './suisse-intl-mono.ttf',
  display: 'swap',
});
