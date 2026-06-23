import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '../components/header';
import localFont from 'next/font/local';

const robFont = Roboto({
  subsets: ['latin'],
});

export const oldschoolGrotesk = localFont({
  src: '../../public/fonts/OldschoolGroteskHeavy.ttf',
  variable: '--font-oldschool',
});
export const metadata: Metadata = {
  title: 'GAMESCOPE',
  description: 'Sua melhor fonte de informações sobre jogos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
