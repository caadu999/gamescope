import { Results } from '@/types/types';
import styles from '@/components/CardResultado/cardResultado.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Tags from '../tags';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { oldschoolGrotesk } from '@/lib/fonts';
import { FaStar } from 'react-icons/fa';
import { getDetalhes } from '@/lib/API/API';

type Props = {
  jogo: Results;
};

export default async function CardResultado({ jogo }: Props) {
  const nome = jogo.name.substring(0, 43) + '...';
  const detalhes = await getDetalhes(jogo.slug);
  const ratingSlice = jogo.genres.slice(0, 3);

  const descricao = detalhes.description_raw.substring(0, 80) + '...';

  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Image
          src={jogo.background_image || '/palceholder.png'}
          alt={jogo.name}
          fill
          quality={80}
        ></Image>
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.container__info}>
          <div className={styles.container__title}>
            <h2 className={oldschoolGrotesk.className}>
              {jogo.name.length > 44 ? nome : jogo.name}
            </h2>
            <p>
              {detalhes.description_raw.length > 80
                ? descricao
                : detalhes.description_raw}
            </p>
          </div>
          <div className="inline-flex gap-2">
            {jogo.genres.length > 0 ? (
              ratingSlice.map((genre) => <Tags text={genre} key={genre.id} />)
            ) : (
              <p className="bg-[#141414] font-bold xl:w-4 xl:rounded-lg xl:px-4 xl:py-2">
                S/N
              </p>
            )}
          </div>
        </div>
        <div className={styles.container__interacoes}>
          <div className={styles.container__nota}>
            <FaStar size={30} />
            <span>{jogo.rating ? jogo.rating : 'S/A'}</span>
          </div>
          <Link href={`jogos/${jogo.slug}`} className={styles.button}>
            <FaArrowAltCircleRight size={40} />
            <span>Saiba Mais</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
