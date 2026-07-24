'use client';

import { easeInOut, motion, AnimatePresence, easeIn } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

import { useState } from 'react';
import { geist } from '../../../../public/fonts/fonts';

type ItemProps = {
  item: Props;
};

type Props = {
  id: number;
  question: string;
  answer: string;
};

export default function Accordion({ item }: ItemProps) {
  const [open, setOpen] = useState<number | null>(null);
  const [isHover, setIsHover] = useState(false);

  function handleClick(id: number) {
    setOpen(open === id ? null : id);
  }
  return (
    <motion.div
      onClick={() => handleClick(item.id)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`flex w-96 cursor-pointer flex-col items-start gap-6 overflow-hidden rounded-[12px] border-[1px] border-solid border-[#5c5c5c] bg-black p-8 text-[#a0a0a0] lg:w-[860px] xl:w-[900px] ${geist.className}`}

      whileHover={{
        color: '#ffffff',
      }}

      transition={{
        duration: 0.5,
        ease: easeInOut,
      }}
    >
      <button className="flex w-full items-center text-[28px] font-bold md:justify-between">
        <motion.h2
          animate={{
            x: isHover ? 4 : 0,
          }}
        >
          {item.question}
        </motion.h2>{' '}
        <motion.div
          animate={{
            rotate: open ? 360 : 0,
          }}

          transition={{
            duration: 0.8,
            ease: easeInOut,
          }}
        >
          <FaPlus size={18} color="#FF643D" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open === item.id && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: easeIn,
            }}
          >
            {item.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
