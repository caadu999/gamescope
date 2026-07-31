'use client';

import { FaBookmark } from 'react-icons/fa';

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
    <button
      onClick={() => addWishlist()}
      className="flex h-14 w-14 items-center justify-center rounded-[10px] border-[1px] border-solid border-neutral-800 bg-[#0c0c0c] transition-all duration-200 ease-in hover:cursor-pointer hover:bg-[#0a0a0a] lg:mr-4"
    >
      {jaAdd ? <FaCheck size={20} /> : <FaBookmark size={20} color="#CCCCC7" />}
    </button>
  );
}
