'use client';
import { WishListContext } from '@/context/wishlistContext';
import { useContext } from 'react';
import CardWishlist from '@/components/cardWishlist/cardWishlist';
import styles from '@/app/wishlist/page.module.scss';
import { FaHeart, FaGamepad } from 'react-icons/fa';
import CardFlutuante from '@/components/cardFlutuante/cardFlutuante';

import Intro from '../_intro';
import TituloPaginas from '@/components/tituloPagina';

export default function WishlistPage() {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error(
      'WishListContext deve ser usado dentro de WishlistProvider',
    );
  }

  const { wishlist } = context;

  return (
    <>
      <Intro />
      <section className={styles.container}>
        {wishlist.length > 0 ? (
          <TituloPaginas text={'Lista de Desejos!'} />
        ) : (
          <TituloPaginas text={'Comece a adicionar jogos!'} />
        )}

        <CardFlutuante className={`hidden ${styles.cardGreen}`}>
          <div>
            <FaHeart size={40} />
          </div>
        </CardFlutuante>
        <CardFlutuante className={`hidden ${styles.cardOrange}`}>
          <div>
            <FaGamepad size={40} />
          </div>
        </CardFlutuante>

        <div className={styles.container__grid}>
          {wishlist.map((jogo) => (
            <CardWishlist jogo={jogo} key={jogo.id} />
          ))}
        </div>
      </section>
    </>
  );
}
