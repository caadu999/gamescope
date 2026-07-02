'use client';
import { WishListContext } from '@/context/wishlistContext';
import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Results } from '@/types/types';

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

  return (
    <div>
      <h1>{jogo.name}</h1>
      <p>{jogo.rating}</p>
      <button onClick={() => handleRemove(jogo.id)}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}
