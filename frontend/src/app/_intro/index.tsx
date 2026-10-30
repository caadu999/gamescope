'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { oldschoolGrotesk } from '@/lib/fonts';
import Image from 'next/image';

export default function Intro() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setIsLeaving(true), 1800);
    const removeTimer = setTimeout(() => setShowIntro(false), 2400);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!showIntro) return null;

  return (
    <motion.div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#FF643D] ${oldschoolGrotesk.className}`}

      initial={{
        clipPath: 'inset(0 0 0% 0)',
      }}

      animate={{
        clipPath: isLeaving ? 'inset(0 0 100% 0)' : 'inset(0 0 0% 0)',
      }}

      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.6,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.3,
        }}

        className="text-[100px] text-black"
      >
        <Image src={'/logo-preta.png'} alt="logo" width={200} height={200} />
      </motion.div>
    </motion.div>
  );
}
