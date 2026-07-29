'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GoArrowUpLeft } from 'react-icons/go';
import { useState } from 'react';
import { geist } from '../../public/fonts/fonts';
import { anton } from '../../public/fonts/fonts';
import { great } from '../../public/fonts/fonts';

export default function NotFound() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`flex min-h-[calc(100vh-80px)] flex-col items-center justify-center ${anton.className}`}
    >
      <div className="flex h-[450px] w-full select-none items-center justify-center tracking-[-20px]">
        <h1 className="relative font-bold text-[#E8E8E3] lg:text-[400px]">
          4
          <span
            className={`${great.className} text-[600px] mix-blend-difference`}
          >
            0
          </span>
          <span className="inline-block rotate-[-12deg] mix-blend-difference">
            4
          </span>
        </h1>
      </div>
      <div className="absolute flex h-[52px] w-[99vw] flex-nowrap items-center justify-center overflow-hidden bg-[#FF643D] text-[40px] font-bold text-[#141414]">
        <motion.div
          animate={{
            x: '-100%',
          }}

          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 11,
          }}
          className="flex h-[50%] w-full flex-nowrap whitespace-nowrap"
        >
          NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND
          NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND
          NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND
          NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND NOT FOUND
          NOT FOUND NOT FOUND
        </motion.div>
      </div>
      <Link
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        href={'/'}
        className={`relative flex h-10 items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[4px] bg-[#E8E8E3] px-[10px] py-[10px] text-[20px] font-bold text-[#141414] lg:w-60 ${geist.className}`}
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
          Voltar para Home
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
          Voltar para Home
        </motion.div>

        <motion.div
          animate={{
            scale: isHover ? 0.9 : 1,
          }}

          className="absolute right-0 mr-2 flex h-7 w-7 items-center rounded-[2px] bg-[#141414] object-contain p-2 text-white"
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
  );
}
