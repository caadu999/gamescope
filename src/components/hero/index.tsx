import styles from '@/components/hero/hero.module.scss';
import { IoGameController } from 'react-icons/io5';

import Destaque from '../destaque';
import TituloHome from '../tituloHome';
import Link from 'next/link';
import CardFlutuante from '../cardFlutuante/cardFlutuante';
import { FaFireAlt } from 'react-icons/fa';
import { BiSolidGame } from 'react-icons/bi';

export default function Hero() {
  return (
    <section className={styles.container}>
      <TituloHome text="Ache seu novo jogo favorito aqui." />
      <CardFlutuante className={styles.cardGreen}>
        <div>
          <FaFireAlt size={40} />
        </div>
      </CardFlutuante>
      <CardFlutuante className={styles.cardYellow}>
        <div>
          <IoGameController size={40} />
        </div>
      </CardFlutuante>
      <CardFlutuante className={styles.cardOrange}>
        <div>
          <BiSolidGame size={40} />
        </div>
      </CardFlutuante>

      <div className={styles.container__buttons}>
        <Link href={'/jogos'} className={styles.button}>
          Explorar
        </Link>
        <Link href={'/'} className={styles.button}>
          Lista de desejos
        </Link>
      </div>
      <Destaque />
    </section>
  );
}
