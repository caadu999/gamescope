'use client';

import { Results } from '@/types/types';
import { createContext, useState, useEffect } from 'react';
import { getItem, setItem } from '@/utils/localStorage';

type WishlistContextType = {
  wishlist: Results[];
  setWishlist: React.Dispatch<React.SetStateAction<Results[]>>;
};

export const WishListContext = createContext<WishlistContextType | undefined>(
  undefined,
);

type WishlistProviderProps = {
  children: React.ReactNode;
};

export function WishlistProvider({ children }: WishlistProviderProps) {
  // valor inicial seguro pro servidor — sem tocar em window aqui
  const [wishlist, setWishlist] = useState<Results[]>([]);

  // roda só no cliente, depois da montagem
  useEffect(() => {
    const item = getItem('wishlist');
    if (item) setWishlist(item as Results[]);
  }, []);

  // salva só depois que já carregou (evita sobrescrever com [] antes de ler)
  useEffect(() => {
    setItem('wishlist', wishlist);
  }, [wishlist]);

  return (
    <WishListContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishListContext.Provider>
  );
}
