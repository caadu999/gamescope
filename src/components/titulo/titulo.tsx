'use client';

import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div
      className={`h-22 flex w-full items-center justify-between rounded-md p-4 md:mt-4 md:w-[87vw] xl:w-[1200px]`}
    >
      <Link
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="flex w-full gap-6"
        href={`/jogos/${link}`}
      >
        {icon}
        <div className="relative flex flex-col">
          <h1 className="mb-1 flex items-center gap-2 text-2xl font-bold">
            {text}
          </h1>
          <AnimatePresence>
            <motion.div
              initial={{
                scaleX: 0,
                originX: 0,
              }}

              animate={{
                scaleX: isHover ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
              }}

              exit={{
                scaleX: 1,
              }}

              className="absolute bottom-0 h-0.5 w-full bg-[#FF643D]"
            ></motion.div>
          </AnimatePresence>
        </div>
      </Link>
      <IoIosArrowForward className="cursor-pointer" size={20} />
    </div>
  );
}
