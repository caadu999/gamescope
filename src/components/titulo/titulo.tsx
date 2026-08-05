'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  link: string;
};

export default function Titulo({ icon, text }: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1.2,
      }}

      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`h-22 flex w-full select-none items-center justify-between overflow-hidden border-b border-dotted border-gray-400 p-4 md:mt-4`}
    >
      <div className="flex gap-6">
        <div className="text-[#E2E2E1]">{icon}</div>
        <div className="relative flex flex-col">
          <motion.h1
            animate={{
              x: isHover ? 10 : 0,
            }}
            className="mb-1 flex items-center gap-2 text-3xl font-bold"
          >
            {text}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
