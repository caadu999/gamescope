'use client';

import { Results } from '@/types/types';

import { MdOutlineArrowOutward } from 'react-icons/md';
import Tags from '../tags';
import { FaStar } from 'react-icons/fa';
import { oldschoolGrotesk } from '@/lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

type CardProps = {
  jogo: Results;
};

export default function Card({ jogo }: CardProps) {
  const [isHover, setIsHover] = useState(false);
  const tituloMenor = `${jogo.name.substring(0, 15)}...`;

  return (
    <section
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}

      className="flex w-24 flex-col justify-between rounded-lg bg-[#232323] md:w-full xl:h-96 xl:overflow-hidden"
    >
      <div className="relative h-40 overflow-hidden rounded-lg md:h-52 xl:rounded-none">
        <Image
          className="object-cover transition-all duration-200 ease-in hover:scale-125"
          src={jogo.background_image || '/placeholder.png'}
          alt={jogo.name}
          fill
          quality={70}
        />
      </div>

      <div className="relative flex h-full flex-col justify-between gap-2 xl:p-4">
        <div className="flex items-center gap-2">
          <motion.div
            className="absolute rounded-[2px] bg-[#0B0B0A] p-1 font-bold"

            animate={{
              opacity: isHover ? 1 : 0,
            }}
          >
            <MdOutlineArrowOutward />
          </motion.div>
          <motion.h1
            animate={{
              x: isHover ? 34 : 0,
            }}
            className={`hidden w-[90%] text-[20px] xl:block ${oldschoolGrotesk.className}`}
          >
            {jogo.name.length >= 15 ? tituloMenor : jogo.name}
          </motion.h1>
        </div>
        <p className="hidden items-center text-[20px] font-bold xl:inline-flex xl:gap-2">
          {' '}
          <FaStar size={20} color="#fdc317" />{' '}
          {jogo.rating ? jogo.rating : 'S/N'}
        </p>
        <div className="hidden gap-2 xl:flex">
          {jogo.genres.length > 0 ? (
            jogo.genres.map((genre) => (
              <Tags text={genre} key={jogo.description_raw} />
            ))
          ) : (
            <p className="bg-[#141414] font-bold xl:rounded-lg xl:px-4 xl:py-2">
              S/N
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
