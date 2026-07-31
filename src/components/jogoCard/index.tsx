'use client';

import { Results } from '@/types/types';
import { oldschoolGrotesk } from '@/lib/fonts';
import Image from 'next/image';
import { easeOut, motion } from 'framer-motion';
import { useState } from 'react';
import { GoArrowUpLeft } from 'react-icons/go';
import Link from 'next/link';

type CardProps = {
  jogo: Results;
};

export default function Card({ jogo }: CardProps) {
  const [isHover, setIsHover] = useState(false);
  const tituloMenor = `${jogo.name.substring(0, 15)}...`;
  console.log(jogo);

  return (
    <section
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}

      className="flex w-24 cursor-pointer flex-col justify-between rounded-sm bg-[#232323] md:w-96 xl:h-72 xl:max-w-96 xl:overflow-hidden"
    >
      <Link
        className="flex w-24 cursor-pointer flex-col justify-between rounded-sm bg-[#232323] md:w-full xl:overflow-hidden"
        href={`/jogos/${jogo.slug}`}
      >
        <div className="relative h-40 overflow-hidden rounded-lg md:h-80 xl:rounded-none">
          <Image
            className="object-cover transition-all duration-200 ease-in hover:scale-125"
            src={jogo.background_image || '/placeholder.png'}
            alt={jogo.name}
            fill
            quality={70}
          />
        </div>

        <div className="relative hidden  lg:flex flex-col justify-between gap-2 lg:h-full xl:p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-[40px] w-full flex-col overflow-hidden">
              <motion.h1
                initial={{
                  y: 15,
                }}
                animate={{
                  y: isHover ? -35 : 12,
                }}
                transition={{
                  duration: 0.2,
                  ease: easeOut,
                }}
                className={`hidden w-[90%] text-[20px] xl:block ${oldschoolGrotesk.className}`}
              >
                {jogo.name.length >= 15 ? tituloMenor : jogo.name}
              </motion.h1>
              <motion.h1
                initial={{
                  y: 20,
                }}
                animate={{
                  y: isHover ? -25 : 20,
                }}

                transition={{
                  duration: 0.2,
                  ease: easeOut,
                }}
                className={`hidden w-[90%] text-[20px] xl:block ${oldschoolGrotesk.className}`}
              >
                Ver jogo
              </motion.h1>
            </div>

            <motion.div
              animate={{
                x: isHover ? -8 : 40,
              }}

              className="absolute right-0 mr-2 hidden h-7 w-7 items-center rounded-[2px] bg-[#141414] object-contain p-2 text-white xl:flex"
            >
              <motion.p>
                <GoArrowUpLeft size={30} strokeWidth={3} />
              </motion.p>
            </motion.div>
          </div>
          <div className="hidden h-[10px] items-center text-[18px] font-bold xl:inline-flex xl:gap-2">
            <motion.div
              animate={{
                scale: isHover ? 0.9 : 1,
                backgroundColor: isHover ? '#E8E8E3' : '#232323',
              }}
              className="h-2 w-2 rounded-full border-[1px] border-solid border-[#E8E8E3] bg-slate-50"
            ></motion.div>
            <p>{jogo.rating ? jogo.rating : 'S/N'}</p>
            <motion.div
              animate={{
                scale: isHover ? 0.9 : 1,
                backgroundColor: isHover ? '#232323' : '#E8E8E3',
              }}
              className="h-2 w-2 rounded-full border-[1px] border-solid border-[#E8E8E3] bg-slate-50"
            ></motion.div>
            <div>
              {jogo.genres.length > 0 ? (
                jogo.genres
                  .slice(0, 1)
                  .map((genre) => (
                    <div key={jogo.description_raw}>{genre.name}</div>
                  ))
              ) : (
                <p className="font-bold xl:rounded-lg">S/N</p>
              )}
            </div>
          </div>
          <div className="hidden gap-2 xl:flex"></div>
        </div>
      </Link>
    </section>
  );
}
