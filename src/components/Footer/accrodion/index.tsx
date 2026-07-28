'use client';

import { easeInOut, motion, AnimatePresence, easeIn } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { geist } from '../../../../public/fonts/fonts';

type ItemProps = {
  item: Props;
  open: number | null;
  onToggle: (id: number) => void;
};

type Props = {
  id: number;
  question: string;
  answer: string;
};

export default function Accordion({ item, open, onToggle }: ItemProps) {
  const [isHover, setIsHover] = useState(false);
  const isOpen = open === item.id;

  return (
    <motion.div
      onClick={() => onToggle(item.id)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`flex w-full cursor-pointer flex-col items-start gap-6 overflow-hidden border-b border-dotted border-[#5c5c5c] p-6 px-2 text-[#a0a0a0] md:w-96 lg:w-[860px] xl:w-[900px] ${geist.className}`}
      animate={{
        backgroundColor: isOpen ? '#E8E8E3' : '#181715',
      }}
      whileHover={{
        backgroundColor: '#E8E8E3',
      }}
      transition={{
        duration: 0.4,
        ease: easeInOut,
      }}
    >
      <button className="flex h-full w-full items-center text-[28px] font-bold md:justify-between">
        <motion.h2
          animate={{
            x: isHover || isOpen ? 4 : 0,
            color: isHover || isOpen ? '#141414' : '#E8E8E3',
          }}
        >
          {item.question}
        </motion.h2>{' '}
        <motion.div
          className="hidden md:flex"
          animate={{
            x: isHover || isOpen ? -10 : 0,
            rotate: isOpen ? 360 : 0,
          }}
          transition={{
            rotate: { duration: 0.8, ease: easeInOut },
            x: {
              duration: 0.1,
              ease: easeIn,
            },
          }}
        >
          <FaPlus size={18} color={isOpen || isHover ? '#141414' : '#FF643D'} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="pl-2 font-[600] lg:text-[17px] xl:w-[60%]"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              color: isOpen ? '#080807' : '#080807',
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
