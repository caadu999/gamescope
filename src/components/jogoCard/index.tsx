import { Results } from '@/types/types';
import Link from 'next/link';
import styles from '@/components/jogoCard/card.module.scss';
import Tags from '../tags';
import { FaStar } from 'react-icons/fa';
import { oldschoolGrotesk } from '@/app/layout';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

type CardProps = {
  jogo: Results;
};

export default function Card({ jogo }: CardProps) {
  const tituloMenor = `${jogo.name.substring(0, 30)}...`;
  console.log(jogo);
  return (
    <section className={styles.container}>
      <div className={styles.container__img}>
        <Image
          src={jogo.background_image || '/placeholder.png'}
          alt={jogo.name}
          fill
        />
      </div>

      <div className={styles.card__info}>
        <h2 className={oldschoolGrotesk.className}>
          {jogo.name.length > 30 ? tituloMenor : jogo.name}
        </h2>
        <ul className={styles.lista}>
          {jogo.genres.length > 0 ? (
            jogo.genres.map((genre) => <Tags key={genre.id} text={genre} />)
          ) : (
            <li>Nenhum gênero cadastrado</li>
          )}
        </ul>
      </div>

      <div className={styles.card__bottom}>
        <div>
          {' '}
          <FaStar size={20} /> <span>{jogo.rating ? jogo.rating : 'S/A'}</span>
        </div>

        <Link
          className={styles.card__bottom__button}
          href={`/jogos/${jogo.slug}`}
        >
          <FaPlay size={20} />
          Ver Mais
        </Link>
      </div>
    </section>
  );
}
