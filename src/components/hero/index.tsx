import styles from '@/components/hero/hero.module.scss';
import { IoGameController } from 'react-icons/io5';
import Destaque from '../destaque';
import TituloHome from '../tituloHome';
import CardFlutuante from '../cardFlutuante/cardFlutuante';
import { FaFireAlt } from 'react-icons/fa';
import { BiSolidGame } from 'react-icons/bi';
import SearchInput from '../searchInput';
import Transicao from '@/components/Transicao';

export default function Hero() {
  return (
    <section className={styles.container}>
      <Transicao />

      <TituloHome text="Ache seu novo jogo favorito aqui." />
      <CardFlutuante className="left-2/4 top-8 z-30 hidden rounded-[50%] bg-[#ff6d38] p-3 md:absolute md:hidden lg:block">
        <div>
          <FaFireAlt size={40} />
        </div>
      </CardFlutuante>
      <CardFlutuante className="right-3/4 top-8 z-20 hidden rounded-[50%] bg-[#7a78ff] p-3 md:absolute md:hidden lg:block">
        <div>
          <IoGameController size={40} />
        </div>
      </CardFlutuante>
      <CardFlutuante className="right-96 top-40 z-10 hidden rounded-[50%] bg-[#fdc317] p-3 md:absolute md:hidden lg:block">
        <div>
          <BiSolidGame size={40} />
        </div>
      </CardFlutuante>
      <SearchInput />

      <Destaque />
    </section>
  );
}
