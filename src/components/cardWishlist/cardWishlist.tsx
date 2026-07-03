'use client';
import { WishListContext } from '@/context/wishlistContext';
import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Results } from '@/types/types';
import Image from 'next/image';
import styles from '@/components/cardWishlist/cardWishlist.module.scss';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';

type CardProps = {
  jogo: Results;
};

export default function CardWishlist({ jogo }: CardProps) {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error(
      'WishListContext deve ser usado dentro de WishlistProvider',
    );
  }

  const { setWishlist } = context;

  function handleRemove(id: number) {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  }

  const nome = jogo.name.substring(0, 40) + '...';

  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Image
          src={jogo.background_image || 'placeholder.png'}
          quality={80}
          fill
          alt={jogo.name}
        ></Image>
      </div>
      <div className={styles.container__info}>
        <h1>{jogo.name.length > 40 ? nome : jogo.name}</h1>
        <div className={styles.container__bottom}>
          <button onClick={() => handleRemove(jogo.id)}>
            <FaRegTrashAlt size={30} />
          </button>
          <Link
            href={`/jogos/${jogo.slug}`}
            className={styles.container__links}
          >
            <FaArrowAltCircleRight size={35} />
            <span>Saiba Mais</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
