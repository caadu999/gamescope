import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import styles from '@/components/titulo/titulo.module.scss';

type Props = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  link: string;
};

export default function Titulo({ icon, text, className, link }: Props) {
  return (
    <div className={styles.container}>
      <div className={className}>{icon}</div>
      <h1>{text}</h1>

      <div>
        <Link className={styles.container__links} href={`/jogos/${link}`}>
          <span>Ver todos</span>

          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}
