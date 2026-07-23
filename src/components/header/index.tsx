'use client';

import Link from 'next/link';
import styles from '@/components/header/header.module.scss';
import { oldschoolGrotesk } from '@/lib/fonts';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={oldschoolGrotesk.className}>
        <Link href={'/'}>G</Link>
      </h1>

      <nav>
        <ul>
          <li className="hover:bg-white hover:text-[#141414]">
            <Links href="/">Home</Links>
          </li>
          <li className="hover:bg-white hover:text-[#141414]">
            <Links href="/wishlist">Wishlist</Links>
          </li>
          <li className="hover:bg-white hover:text-[#141414]">
            <Links href="/jogos">Jogos</Links>
          </li>
          <li className="hover:bg-white hover:text-[#141414]">
            <Links href="/sobre">Sobre</Links>
          </li>
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
      className="relative block overflow-hidden whitespace-nowrap"
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
      <div className="iset 0 absolute bg-blue-400">
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
