'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const Router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [isHoverInput, setIsHoverInput] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    Router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className={'mb-4 mt-4 flex items-center gap-4'}
    >
      <motion.input
        onHoverStart={() => setIsHoverInput(true)}
        onHoverEnd={() => setIsHoverInput(false)}

        animate={{
          scaleX: isHoverInput ? 1.09 : 1,
        }}

        type="search"
        value={query}
        name="search"
        id="search"
        placeholder="Buscar jogos..."
        onChange={(e) => setQuery(e.target.value)}
        className={
          'h-12 w-60 rounded-md border-2 border-gray-400 bg-transparent px-2 md:w-80 lg:w-80'
        }
      />

      <motion.button
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        animate={{
          translateX: isHoverInput ? 20 : 0,
        }}

        className="relative z-20 overflow-clip rounded-[16px] bg-[#FFFFFF] px-6 py-3 font-bold text-[#161616] transition-all duration-[300ms] ease-out"
        type="submit"
      >
        <motion.p className="relative z-20 flex h-[100%] w-[100%]">
          Buscar
        </motion.p>
        <motion.div
          className="absolute left-0 z-10 h-[120%] w-[100%] rounded-[16px] bg-[#c7ff69]"
          initial={false}
          animate={{
            y: isHover ? -36 : 12,
            scaleX: isHover ? 1 : 0,

            borderRadius: isHover ? '16px' : '30px',
          }}
          transition={{ duration: 0.2 }}
        ></motion.div>
      </motion.button>
    </form>
  );
}
