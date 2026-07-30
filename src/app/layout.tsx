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
import { CardProvider } from '@/context/cardContext';
import PainelLateral from '@/components/PainelLateral';

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
          <CardProvider>
            <WishlistProvider>
              <SmoothScroll>
                <PainelLateral />
                <Header />
                <Overlay />
                {children}
                <Footer />
              </SmoothScroll>
            </WishlistProvider>
          </CardProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
