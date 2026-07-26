'use client';

import { Results } from '@/types/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  jogo: Results;
};

export default function Destaque({ jogo }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 0.98,
      }}

      transition={{
        duration: 0.4,
      }}

      className="relative overflow-hidden bg-blue-50 lg:h-[400px] lg:w-[700px] lg:rounded-lg"
    >
      <Image
        src={jogo.background_image}
        alt={jogo.name}
        fill
        className="object-cover"
      />
    </motion.div>
  );
}
