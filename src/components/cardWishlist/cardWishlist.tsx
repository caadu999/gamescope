'use client';
import { WishListContext } from '@/context/wishlistContext';
import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Results } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Tags from '../tags';
import { oldschoolGrotesk } from '@/lib/fonts';

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

  const nome = jogo.name.substring(0, 30) + '...';

  return (
    <div className="flex h-52 w-[90vw] items-center justify-between rounded-xl border-[1px] border-solid border-[#252525] bg-[#111111] p-4 md:gap-4 lg:h-56 lg:w-[840px] lg:justify-normal lg:gap-4">
      <div className="relative h-44 w-36 overflow-hidden rounded-lg md:w-44 lg:h-48 lg:w-44">
        <Image
          className="object-cover"
          src={jogo.background_image || 'placeholder.png'}
          quality={80}
          fill
          alt={jogo.name}
        ></Image>
      </div>
      <div className="flex h-full w-[62%] flex-col justify-between md:w-[76%] lg:w-[80%]">
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between">
            <h1
              className={`border-b-[1px] border-solid border-[#434141] text-[22px] font-bold lg:pb-2 lg:text-3xl ${oldschoolGrotesk.className}`}
            >
              {jogo.name.length > 30 ? nome : jogo.name}
            </h1>
            <button
              className="hidden rounded-lg border-[1px] border-solid border-[#434141] p-4 md:flex"
              onClick={() => handleRemove(jogo.id)}
            >
              <FaRegTrashAlt className="" size={30} />
            </button>
          </div>
          <div className="flex gap-2">
            {jogo.genres.map((genero) => (
              <Tags text={genero} key={jogo.id} />
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="hidden items-center gap-2 font-bold md:flex lg:text-2xl">
            <FaStar size={24} />
            <p>
              {jogo.rating} <span className="text-base font-normal">/ 5.0</span>
            </p>
          </div>
          <Link
            href={`/jogos/${jogo.slug}`}
            className="flex w-44 items-center justify-between rounded-lg bg-[#C2F34E] px-4 py-2 font-bold text-[#141414] md:w-40 lg:w-52"
          >
            <span>Saiba Mais</span>
            <FaArrowAltCircleRight size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
}
