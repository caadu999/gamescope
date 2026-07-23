'use client';
import { WishListContext } from '@/context/wishlistContext';
import { useContext } from 'react';
import CardWishlist from '@/components/cardWishlist/cardWishlist';
import TituloHome from '@/components/tituloHome';
import styles from '@/app/wishlist/page.module.scss';
import { FaHeart } from 'react-icons/fa';
import CardFlutuante from '@/components/cardFlutuante/cardFlutuante';
import { FaGamepad } from 'react-icons/fa';
import SearchInput from '@/components/searchInput';

export default function WishlistPage() {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error(
      'WishListContext deve ser usado dentro de WishlistProvider',
    );
  }

  const { wishlist } = context;

  return (
    <section className={styles.container}>
      {wishlist.length > 0 ? (
        <TituloHome text="Lista de Desejos" />
      ) : (
        <TituloHome text="Comece a adicionar jogos!" />
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

      <SearchInput />

      <div className={styles.container__grid}>
        {wishlist.map((jogo) => (
          <CardWishlist jogo={jogo} key={jogo.id} />
        ))}
      </div>
    </section>
  );
}
