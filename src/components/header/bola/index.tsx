'use client';
import { easeInOut, motion } from 'framer-motion';
import { ItemProps } from '..';
import { GoArrowUpRight } from 'react-icons/go';

type Props = {
  isHover: string | null;
  item: ItemProps;
};

export default function Bola({ isHover, item }: Props) {
  return (
    <motion.div
      className="flex h-3 w-3 items-center justify-center overflow-hidden rounded-full bg-orange-600"
      animate={{
        scale: isHover === item.id ? 4 : 1,
      }}

      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        animate={{
          opacity: isHover === item.id ? 1 : 0,
          x: isHover === item.id ? 0 : -10,
          y: isHover === item.id ? 0 : 10,
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
      >
        <GoArrowUpRight size={6} />
      </motion.div>
    </motion.div>
  );
}
