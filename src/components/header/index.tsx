'use client';

import styles from '@/components/header/header.module.scss';
import { easeInOut, motion } from 'framer-motion';
import { useTransitionRouter } from 'next-view-transitions';
import { rotas } from './data';
import { useState, useContext } from 'react';
import { CardContext } from '@/context/cardContext';
import Bola from './bola';

export type ItemProps = {
  title: string;
  url: string;
  id: string;
};

export default function Header() {
  const router = useTransitionRouter();
  const [bolaHover, setBolaHover] = useState(false);

  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Erro');
  }

  const { setIsOpen } = context;

  const [isHover, setIsHover] = useState<string | null>(null);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: 'translateY(0)',
        },
        {
          opacity: 0.2,
          transform: 'translateY(-35%)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      },
    );

    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  }

  function handleMouseEnter(item: ItemProps) {
    setIsHover(item.id);
    setBolaHover(true);
  }

  function handleMouseLeave() {
    setIsHover(null);
    setBolaHover(false);
  }

  return (
    <motion.header className={styles.header}>
      <nav className="flex w-full items-center justify-between">
        <ul className="flex items-center justify-center font-bold lg:gap-8">
          {rotas.map((item, i) => (
            <motion.a
              initial={{
                opacity: 0,
                y: 24,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: 2.1 + i * 0.1,
                ease: easeInOut,
              }}

              className="relative flex items-center justify-center px-3 py-1 text-lg"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={(e) => {
                e.preventDefault();

                if (item.id === 'sobre') {
                  setIsOpen(true);
                  return;
                }

                router.push(item.url, {
                  onTransitionReady: slideInOut,
                });
              }}
              key={item.title}
              href={item.url}
            >
              <div className="relative z-10 flex items-center gap-8 text-[#E8E8E3]">
                <Bola isHover={isHover} item={item} /> {item.title}
              </div>
            </motion.a>
          ))}
        </ul>
      </nav>
      <motion.div
        className="absolute bottom-0 h-[2px] w-full bg-gray-500"
        initial={{
          scaleX: 0,
        }}

        animate={{
          scaleX: '100%',
        }}

        transition={{
          duration: 0.6,
          delay: 2.2,
        }}
      ></motion.div>
    </motion.header>
  );
}

const duracao = 0.25;
const efeito = 0.025;

const Links = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      className="relative z-10 block overflow-hidden whitespace-nowrap"
      href={href}
      initial="initial"
      whileHover="hover"
    >
      <div>
        {children.split('').map((l, i) => {
          return (
            <motion.span
              transition={{
                duration: duracao,
                ease: 'easeInOut',
                delay: efeito * i,
              }}
              className="inline-block"
              variants={{
                initial: {
                  y: 0,
                },
                hover: {
                  y: '-100%',
                },
              }}

              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute bg-blue-400">
        {children.split('').map((l, i) => {
          return (
            <motion.span
              transition={{
                duration: duracao,
                ease: 'easeInOut',
                delay: efeito * i,
              }}
              className="inline-block"
              variants={{
                initial: {
                  y: 0,
                },
                hover: {
                  y: '-100%',
                },
              }}

              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};
