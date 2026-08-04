'use client';

import { Resultss } from '@/types/types';
import { createContext, useState, useEffect } from 'react';
import { getItem, setItem } from '@/utils/localStorage';

type WishlistContextType = {
  wishlist: Resultss[];
  setWishlist: React.Dispatch<React.SetStateAction<Resultss[]>>;
};

export const WishListContext = createContext<WishlistContextType | undefined>(
  undefined,
);

type WishlistProviderProps = {
  children: React.ReactNode;
};

export function WishlistProvider({ children }: WishlistProviderProps) {
  // valor inicial seguro pro servidor
  const [wishlist, setWishlist] = useState<Resultss[]>([]);

  // roda só no cliente
  useEffect(() => {
    const item = getItem('wishlist');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (item) setWishlist(item as Resultss[]);
  }, []);

  // salva só depois que já carregou
  useEffect(() => {
    setItem('wishlist', wishlist);
  }, [wishlist]);

  return (
    <WishListContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishListContext.Provider>
  );
}
