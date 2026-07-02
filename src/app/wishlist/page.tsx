'use client';
import { WishListContext } from '@/context/wishlistContext';
import { useContext } from 'react';
import CardWishlist from '@/components/cardWishlist/cardWishlist';

export default function WishlistPage() {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error(
      'WishListContext deve ser usado dentro de WishlistProvider',
    );
  }

  const { wishlist } = context;

  return (
    <section>
      <div>
        {wishlist.map((jogo) => (
          <CardWishlist jogo={jogo} key={jogo.id} />
        ))}
      </div>
    </section>
  );
}
