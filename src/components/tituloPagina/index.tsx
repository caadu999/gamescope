'use client';

import { oldschoolGrotesk } from '@/lib/fonts';
import { motion, easeInOut } from 'framer-motion';

type Props = {
  text: string;
};

export default function TituloPaginas({ text }: Props) {
  return (
    <motion.h1
      initial={{
        y: 40,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 1.9,
        ease: easeInOut,
      }}

      className={`mb-8 mt-8 w-96 select-none text-center text-6xl font-bold text-[#E8E8E3] md:w-4/5 md:text-7xl lg:w-[80%] lg:text-9xl lg:leading-[142px] xl:w-[1200px] ${oldschoolGrotesk.className}`}
    >
      {text}
    </motion.h1>
  );
}
