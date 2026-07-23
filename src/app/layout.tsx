import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '../components/header';
import { WishlistProvider } from '@/context/wishlistContext';
import './globals.css';

const robFont = Roboto({
  subsets: ['latin'],
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
        <WishlistProvider>
          <Header />
          {children}
        </WishlistProvider>
      </body>
    </html>
  );
}
