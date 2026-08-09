'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, easeInOut, easeIn } from 'framer-motion';
import { geist } from '../../../public/fonts/fonts';

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
      className={'flex items-center gap-4 overflow-hidden'}
    >
      <motion.div
        className="flex"
        initial={{
          y: 50,
        }}

        animate={{
          y: 0,
        }}

        transition={{
          delay: 2.2,
          duration: 0.6,
          ease: easeInOut,
        }}
      >
        <motion.input
          onHoverStart={() => setIsHoverInput(true)}
          onHoverEnd={() => setIsHoverInput(false)}
          type="search"
          value={query}
          name="search"
          id="search"
          placeholder="Buscar jogos..."
          onChange={(e) => setQuery(e.target.value)}
          className={
            'h-12 w-60 rounded-[0.200rem] bg-[#292929] px-4 text-[#E8E8E3] outline-none md:w-80 lg:w-96'
          }
        />
      </motion.div>

      <motion.div
        className="flex"
        initial={{
          y: 50,
        }}
        animate={{
          y: 0,
        }}

        transition={{
          delay: 2.25,
          duration: 0.6,
          ease: easeInOut,
        }}
      >
        <motion.button
          className={`relative flex h-14 w-36 items-center justify-center gap-4 overflow-hidden rounded-full border-[1.9px] border-solid border-[#CACACA] bg-[#080807] p-2 pl-5 pr-5 text-[20px] font-[700] transition-all duration-200 ease-in md:h-12 md:rounded-full md:text-[20px] lg:w-32 lg:text-[20px] ${geist.className}`}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
          whileHover={{
            backgroundColor: '#181818',
          }}
          initial={false}
        >
          <motion.p
            initial={false}
            animate={{
              y: isHover ? '-120%' : 0,
            }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
            }}
            className="absolute flex shrink-0 items-center text-[#cacaca]"
          >
            BUSCAR
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              y: isHover ? 0 : '120%',
            }}
            transition={{
              duration: 0.28,
              ease: easeInOut,
            }}
            className="absolute z-30 flex shrink-0 items-center text-[#cacaca]"
          >
            BUSCAR
          </motion.p>
          <motion.div
            animate={{
              y: isHover ? '0%' : '100%',
              scaleX: isHover ? 1 : 0.8,
            }}
            initial={false}
            transition={{
              duration: 0.24,
            }}
            className="absolute bottom-0 left-0 z-10 h-full w-full rounded-full bg-[#2D2D2D]"
          ></motion.div>
        </motion.button>
      </motion.div>
    </form>
  );
}
