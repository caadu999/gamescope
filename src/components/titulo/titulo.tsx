'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useState } from 'react';

type Props = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  link: string;
};

export default function Titulo({ icon, text, link }: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`h-22 flex w-full items-center justify-between overflow-hidden border-b border-dotted border-gray-400 p-4 md:mt-4 md:w-[87vw] xl:w-[1200px]`}

      animate={{
        backgroundColor: isHover ? '#E2E2E1' : '#080807',
      }}

      transition={{
        duration: 0.2,
      }}
    >
      <Link className="flex w-full gap-6" href={`/jogos/${link}`}>
        <div className="text-[#E2E2E1]">{icon}</div>
        <div className="relative flex flex-col">
          <motion.h1
            animate={{
              x: isHover ? 10 : 0,
              color: isHover ? '#080807' : '#E2E2E1',
            }}

            className="mb-1 flex items-center gap-2 text-3xl font-bold"
          >
            {text}
          </motion.h1>
        </div>
      </Link>

      <motion.div
        className=""

        animate={{
          x: isHover ? -10 : 70,
          color: isHover ? '#141414' : '#141414',
        }}
      >
        <FaArrowRightLong className="cursor-pointer" size={34} />
      </motion.div>
    </motion.div>
  );
}
