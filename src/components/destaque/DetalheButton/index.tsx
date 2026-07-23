'use client';

import { oldschoolGrotesk } from '@/lib/fonts';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function DetalheButton() {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.button
      className={`flex h-16 w-56 items-center justify-center gap-4 rounded-lg bg-white p-2 text-[20px] font-bold text-[#161616] transition-all duration-200 ease-in hover:bg-[#c7ff69] md:text-[26px] lg:text-[22px] ${oldschoolGrotesk.className}`}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      whileTap={{ scale: 0.8 }}
      initial="false"
    >
      <FaArrowAltCircleRight size={40} />
      <span>Saiba Mais</span>
    </motion.button>
  );
}
