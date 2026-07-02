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
  const [wishlist, setWishlist] = useState(() => {
    const item = getItem('wishlist');
    return (item as Results[]) || [];
  });

  useEffect(() => {
    setItem('wishlist', wishlist);
  }, [wishlist]);

  return (
    <WishListContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishListContext.Provider>
  );
}
