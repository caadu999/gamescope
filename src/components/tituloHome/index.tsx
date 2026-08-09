'use client';

import { oldschoolGrotesk } from '@/lib/fonts';
import { easeInOut, motion } from 'framer-motion';

export default function TituloHome() {
  return (
    <motion.div
      initial={{
        y: 16,
      }}

      animate={{
        y: 0,
      }}

      transition={{
        duration: 0.9,
        delay: 1.9,
      }}

      className={`mb-8 mt-8 w-96 select-none text-center text-6xl font-bold text-[#E8E8E3] md:w-4/5 md:text-7xl lg:w-[80%] lg:text-9xl lg:leading-[142px] xl:w-[1200px] ${oldschoolGrotesk.className}`}
    >
      <div className="flex flex-col justify-center overflow-hidden">
        <motion.div
          initial={{
            y: 90,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 2,
            ease: easeInOut,
          }}

          className="relative z-10"
        >
          Ache seu novo jogo
        </motion.div>
      </div>
      <div className="inline-flex w-fit overflow-hidden bg-transparent">
        <motion.div
          initial={{
            y: 90,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 2.05,
            ease: easeInOut,
          }}
        >
          favorito aqui.
        </motion.div>
      </div>
    </motion.div>
  );
}
