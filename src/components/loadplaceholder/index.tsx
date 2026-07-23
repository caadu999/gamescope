'use client';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="flex gap-2">
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          repeat: Infinity,
        }}
        className="h-10 w-10 rounded-full bg-[#7A78FF]"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          delay: 0.15,
          ease: 'easeInOut',
          duration: 1.15,
          repeat: Infinity,
        }}
        className="h-10 w-10 rounded-full bg-[#FF6D38]"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          delay: 0.3,
          ease: 'easeInOut',
          duration: 1.2,
          repeat: Infinity,
        }}
        className="h-10 w-10 rounded-full bg-[#BDFB84]"
      ></motion.div>
    </div>
  );
}
