import styles from '@/components/hero/hero.module.scss';
import { IoGameController } from 'react-icons/io5';

import Destaque from '../destaque';
import TituloHome from '../tituloHome';
import CardFlutuante from '../cardFlutuante/cardFlutuante';
import { FaFireAlt } from 'react-icons/fa';
import { BiSolidGame } from 'react-icons/bi';
import SearchInput from '../searchInput';

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
      <SearchInput />

      <Destaque />
    </section>
  );
}
