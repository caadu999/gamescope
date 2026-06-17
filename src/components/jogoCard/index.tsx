import { Results } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/components/jogoCard/card.module.scss"

type CardProps = {

  jogo: Results;
};

export default function Card({ jogo }: CardProps) {

  const tituloMenor = `${jogo.name.substring(0,23)}...`
  return (
    <section>
    <div>
      <Image
        src={jogo.background_image || '/placeholder.png'}
        width={300}
        height={150}
        alt={jogo.name}
      ></Image>
      <div className={styles.card__info}>
        <h3>{jogo.name.length > 23 ?  tituloMenor : jogo.name}</h3>
        <p>{jogo.rating ? jogo.rating : "S/A"}</p>
      </div>
      <Link href={`/jogos/${jogo.slug}`}>Ver Mais</Link>
    </div>
    </section>
  );
}
