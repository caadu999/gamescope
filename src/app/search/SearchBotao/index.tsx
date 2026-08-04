'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { geist } from '../../../../public/fonts/fonts';
import { Resultss } from '@/types/types';

type Props = {
  jogo: Resultss;
};

export default function ResultButton({ jogo }: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={`/jogos/${jogo.slug}`}
      className={`relative flex h-10 w-80 items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[4px] bg-[#E8E8E3] px-[10px] py-[10px] text-[20px] font-bold text-[#141414] lg:w-64 ${geist.className}`}
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
            x: isHover ? 20 : 1,
          }}
        >
          <FaArrowRight size={30} strokeWidth={3} />
        </motion.p>
        <motion.p
          className="absolute p-1"

          animate={{
            x: isHover ? -4 : -30,
          }}
        >
          <FaArrowRight size={20} strokeWidth={3} />
        </motion.p>
      </motion.div>
    </Link>
  );
}
