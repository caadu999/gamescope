'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
      <h1 className="relative lg:text-[400px]">404</h1>
      <div className="absolute flex h-16 w-[99vw] flex-nowrap items-center justify-center overflow-hidden bg-yellow-500 text-[40px] font-bold text-[#141414]">
        <motion.div
          animate={{
            x: '-100%',
          }}

          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 10,
          }}
          className="flex h-[50%] w-full flex-nowrap whitespace-nowrap"
        >
          PÁGINA NÃO ENCONTRADA PÁGINA NÃO ENCONTRADA PÁGINA NÃO ENCONTRADA
          PÁGINA NÃO ENCONTRADA PÁGINA NÃO ENCONTRADA PÁGINA NÃO ENCONTRADA
          PÁGINA NÃO ENCONTRADA PÁGINA N
        </motion.div>
      </div>
      <Link href={'/'} className="rounded-md bg-white px-6 py-4 text-[#141414]">
        Voltar para Home
      </Link>
    </div>
  );
}
