'use client';

import { CardContext } from '@/context/cardContext';
import { useContext, useState } from 'react';
import { easeIn, motion } from 'framer-motion';
import { geist } from '../../../public/fonts/fonts';
import { suisse } from '../../../public/fonts/fonts';

export default function PainelLateral() {
  const context = useContext(CardContext);
  const [isHover, setIsHover] = useState(false);

  if (!context) {
    throw new Error('Erro');
  }

  const { isOpen, setIsOpen } = context;

  return (
    <>
      <motion.div
        initial={{ clipPath: 'inset(0 0 0 100%)' }}
        animate={{ clipPath: isOpen ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)' }}
        exit={{
          clipPath: 'inset(0 0 0 100%)',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`fixed right-0 top-0 z-[9999] flex h-full w-[50%] flex-col justify-between gap-6 bg-[#E8E8E3] px-7 py-8 text-[#141414] ${geist.className}`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex h-fit w-full items-center justify-between gap-4 font-bold">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-gray-600"></div>
              <p className="text-[20px]">Sobre</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className={`relative flex h-10 items-center justify-center overflow-hidden whitespace-nowrap rounded-[3px] bg-[#141414] px-[10px] py-[10px] text-[20px] font-bold text-[#E8E8E3] lg:w-36 ${geist.className}`}
            >
              <motion.div
                initial={false}
                animate={{
                  y: isHover ? 0 : 30,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="absolute left-0 ml-3"
              >
                Fechar
              </motion.div>
              <motion.div
                animate={{
                  y: isHover ? -50 : 0,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="absolute left-0 ml-3"
              >
                Fechar
              </motion.div>
              <motion.div
                animate={{
                  scale: isHover ? 0.9 : 1,
                }}
                className="absolute right-0 mr-2 flex h-7 w-7 items-center justify-center overflow-hidden rounded-[2px] bg-[#343530] object-contain p-2 text-[#b6b6b6]"
              >
                <motion.p
                  className="text-[8px]"
                  animate={{
                    scale: isHover ? 0.9 : 1,
                  }}
                >
                  ESC
                </motion.p>
              </motion.div>
            </button>
          </div>
          <p className="w-[84%] text-[23px] font-[500] leading-7">
            O Gamescope existe para aproximar pessoas dos jogos que realmente
            importam para elas. Em vez de transformar a descoberta em uma lista
            infinita de resultados, organizamos cada coleção para que explorar
            novos títulos seja simples e rápido. <br /> <br />
            Cada página foi projetada para destacar o que faz um jogo ser
            memorável, sua história e as informações que ajudam você a decidir o
            que jogar em seguida. <br /> <br />o Gamescope é uma experiência
            construída para explorar, descobrir e acompanhar o universo dos
            games através de uma interface moderna, limpa e focada no que
            realmente importa: os jogos.
          </p>
        </div>
        <div
          className={`flex w-full items-baseline justify-between text-[12px] text-[#6b645c] ${suisse.className}`}
        >
          <p>EST. 2026</p>
          <p>POWERED BY RAWG API</p>
          <p>100,000+ GAMES </p>
        </div>
      </motion.div>

      <motion.div
        className={`backdrop-saturate-75 fixed inset-0 z-[8888] h-[100vh] w-[99vw] bg-black/30 backdrop-blur-[20px] backdrop-brightness-75 transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: isOpen ? 1 : 0,
        }}

        transition={{
          duration: 0.3,
          ease: easeIn,
        }}
      ></motion.div>
    </>
  );
}
