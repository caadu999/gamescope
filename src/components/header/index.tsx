'use client';

import styles from '@/components/header/header.module.scss';
import { oldschoolGrotesk } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { useTransitionRouter } from 'next-view-transitions';
import { rotas } from './data';
import { useState } from 'react';

export default function Header() {
  const router = useTransitionRouter();

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

  return (
    <header className={styles.header}>
      <h1 className={oldschoolGrotesk.className}>
        <a href={'/'}>
          <span>G</span>
        </a>
      </h1>

      <nav>
        <ul className="flex items-center justify-center gap-3 font-bold">
          {rotas.map((item) => (
            <a
              className="relative flex items-center justify-center px-2 py-1"
              onMouseEnter={() => setIsHover(item.id)}
              onMouseLeave={() => setIsHover(null)}
              onClick={(e) => {
                e.preventDefault();
                router.push(item.url, {
                  onTransitionReady: slideInOut,
                });
              }}
              key={item.title}
              href={item.url}
            >
              <p className="relative z-10 text-[#E8E8E3]">{item.title}</p>

              <motion.div
                initial={{
                  clipPath: 'inset(0 100% 0 0)',
                }}
                animate={{
                  clipPath:
                    isHover === item.id
                      ? 'inset(0 0% 0 0)'
                      : 'inset(0 100% 0 0)',
                }}

                transition={{ duration: 0.3 }}
                className="absolute z-0 h-full w-full bg-[#141414]"
              ></motion.div>
            </a>
          ))}
        </ul>
      </nav>
    </header>
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
