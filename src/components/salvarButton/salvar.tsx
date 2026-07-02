'use client';

import { FaBookmark } from 'react-icons/fa';
import styles from '@/components/salvarButton/salvar.module.scss';
import { useContext } from 'react';
import { WishListContext } from '@/context/wishlistContext';
import { Results } from '@/types/types';
import { FaCheck } from 'react-icons/fa';

type JogoProps = {
  jogo: Results;
};

export default function Salvar({ jogo }: JogoProps) {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error(
      'WishListContext deve ser usado dentro de WishlistProvider',
    );
  }

  const { wishlist, setWishlist } = context;
  const jaAdd = wishlist.some((item) => item.id === jogo.id);

  function addWishlist() {
    if (jaAdd) return;

    setWishlist((prev) => [...prev, jogo]);
  }

  return (
    <button onClick={() => addWishlist()} className={styles.destaque__icons}>
      {jaAdd ? (
        <FaCheck className={styles.destaque__icon} size={20} />
      ) : (
        <FaBookmark className={styles.destaque__icon} size={20} />
      )}
    </button>
  );
}
