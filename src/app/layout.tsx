import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '../components/header';
import { WishlistProvider } from '@/context/wishlistContext';
import './globals.css';
import Footer from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import Overlay from '@/components/overlay';
import { ViewTransitions } from 'next-view-transitions';

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
    <ViewTransitions>
      <html lang="en">
        <body className={robFont.className}>
          <WishlistProvider>
            <SmoothScroll>
              <Header />
              <Overlay />
              {children}
              <Footer />
            </SmoothScroll>
          </WishlistProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
