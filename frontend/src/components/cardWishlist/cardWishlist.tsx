'use client';
import { WishListContext } from '@/context/wishlistContext';
import { useContext, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Resultss } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import Tags from '../tags';
import { oldschoolGrotesk } from '@/lib/fonts';
import { geist } from '../../../public/fonts/fonts';
import { motion } from 'framer-motion';
import { GoArrowUpLeft } from 'react-icons/go';

type CardProps = {
  jogo: Resultss;
};

export default function CardWishlist({ jogo }: CardProps) {
  const [isHover, setIsHover] = useState(false);
  const context = useContext(WishListContext);
  const cover = `https://images.igdb.com/igdb/image/upload/t_original/${jogo.cover.image_id}.jpg`;
  const nota = String(jogo.rating).slice(0, 4);
  const desc = jogo.summary?.slice(0, 100);

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
    <div className="flex h-56 w-[90vw] items-center justify-between rounded-md border-[1px] border-solid border-[#252525] bg-[#111111] p-4 md:gap-4 lg:h-64 lg:w-[840px] lg:justify-normal lg:gap-5">
      <div className="relative h-56 w-36 overflow-hidden rounded-sm md:w-44 lg:w-44">
        <Image
          className="object-cover"
          src={cover || 'placeholder.png'}
          quality={80}
          fill
          alt={jogo.name}
        ></Image>
      </div>
      <div className="flex h-full w-[62%] flex-col justify-between md:w-[76%] lg:w-[80%]">
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between">
            <h1
              className={`border-b-[1px] border-solid border-[#434141] pb-2 text-[22px] font-bold lg:text-3xl ${oldschoolGrotesk.className}`}
            >
              {jogo.name.length > 30 ? nome : jogo.name}
            </h1>
            <button
              className="hidden h-12 w-12 items-center justify-center rounded-lg border-[1px] border-solid border-[#434141] md:flex"
              onClick={() => handleRemove(jogo.id)}
            >
              <FaRegTrashAlt size={20} />
            </button>
          </div>
          <p className="hidden w-[80%] text-gray-300 md:flex">{desc}...</p>
          <p className="text-[24px] font-[800]">
            {nota}{' '}
            <span className="text-base font-normal text-[#e8e8e3]">/ 100</span>
          </p>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="hidden items-center gap-2 font-bold md:flex lg:text-2xl">
            <div className="flex gap-2">
              {jogo.genres.slice(0, 3).map((genero) => (
                <Tags text={genero} key={genero.id} />
              ))}
            </div>
          </div>
          <Link
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            href={`/jogos/${jogo.slug}`}
            className={`relative flex h-10 w-44 items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[4px] bg-[#E8E8E3] px-[10px] py-[10px] text-[20px] font-bold text-[#141414] ${geist.className}`}
          >
            <motion.div
              initial={false}
              animate={{
                y: isHover ? 0 : 30,
              }}
              transition={{
                duration: 0.15,
              }}

              className="absolute left-0 ml-3"
            >
              Ver jogo
            </motion.div>
            <motion.div
              animate={{
                y: isHover ? -50 : 0,
              }}
              transition={{
                duration: 0.15,
              }}
              className="absolute left-0 ml-3"
            >
              Ver jogo
            </motion.div>

            <motion.div
              animate={{
                scale: isHover ? 0.9 : 1,
              }}

              className="absolute right-0 mr-2 flex h-7 w-7 items-center overflow-hidden rounded-[2px] bg-[#141414] object-contain p-2 text-white"
            >
              <motion.p
                animate={{
                  translateX: isHover ? -17 : 0,
                  translateY: isHover ? -17 : 0,
                }}
              >
                <GoArrowUpLeft size={30} strokeWidth={3} />
              </motion.p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
