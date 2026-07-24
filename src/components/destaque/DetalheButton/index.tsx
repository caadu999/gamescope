'use client';

import { oldschoolGrotesk } from '@/lib/fonts';
import { easeInOut, motion } from 'motion/react';
import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

export default function DetalheButton() {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.button
      className={`relative flex h-16 w-60 items-center justify-between gap-4 overflow-hidden rounded-full border-[1.9px] border-solid border-[#FF6D38] bg-black p-2 pl-5 pr-5 text-[20px] transition-all duration-200 ease-in md:rounded-full md:text-[26px] lg:text-[22px] ${oldschoolGrotesk.className}`}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      whileHover={{
        backgroundColor: '#181818',
      }}
      initial="false"
    >
      <motion.p
        animate={{
          y: isHover ? '-120%' : 0,
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}

        className="absolute flex shrink-0 items-center justify-between text-[#FF6D38]"
      >
        SOBRE
      </motion.p>
      <motion.p
        animate={{
          y: isHover ? 0 : '120%',
        }}
        transition={{
          duration: 0.28,
          ease: easeInOut,
        }}

        className="absolute z-30 flex shrink-0 items-center justify-between text-[#181818]"
      >
        SOBRE
      </motion.p>
      <motion.div
        animate={{
          y: isHover ? '-170%' : 0,
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        className="absolute right-6"
      >
        <MdArrowOutward color="#FF6D38" />
      </motion.div>
      <motion.div
        animate={{
          y: isHover ? 0 : '170%',
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        className="absolute right-6 z-30"
      >
        <MdArrowOutward color="#141414" />
      </motion.div>
      <motion.div
        animate={{
          y: isHover ? '0%' : '100%',
          scaleX: isHover ? 1 : 0.8,
        }}

        initial={{}}

        transition={{
          duration: 0.24,
        }}
        className="absolute bottom-0 left-0 z-10 h-full w-full rounded-full bg-[#FF6D38]"
      ></motion.div>
    </motion.button>
  );
}
