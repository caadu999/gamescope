import { getJogoSlug, getScreenshots } from '@/lib/API/API';
import styles from '@/app/jogos/[slug]/detalhes.module.scss';
import Tags from '@/components/tags';
import { oldschoolGrotesk } from '@/app/layout';
import { FaPlay } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Detalhes({ params }: Props) {
  const { slug } = await params;
  const detalhes = await getJogoSlug(slug);
  const descricaoLimit = `${detalhes.description_raw.substring(0, 400)}...`;

  const fotos = await getScreenshots(slug);
  const fotosLimit = fotos.slice(0, 3);

  console.log(detalhes);

  return (
    <section className={styles.detalhes}>
      <div className={styles.detalhes__containerTop}>
        <div className={styles.detalhes__img}>
          <Image
            src={detalhes.background_image || '/placeholder.png'}
            alt={detalhes.name}
            fill
          />
        </div>

        <div className={styles.detalhes__title}>
          <div className={styles.detalhes__titles}>
            <h1 className={oldschoolGrotesk.className}>{detalhes?.name}</h1>
            <ul className={styles.detalhes__lista}>
              {detalhes.genres.map((genre) => (
                <Tags key={genre.id} text={genre} />
              ))}
            </ul>
          </div>
          <div className={styles.detalhes__buttons}>
            <div className={styles.detalhes__icons}>
              <FaBookmark size={20} />

              <span>Lista de desejos</span>
            </div>
            <div className={styles.detalhes__icons}>
              <FaPlay size={20} />
              <span>Jogar</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sobre}>
        <div className={styles.sobre__esq}>
          <h2 className={oldschoolGrotesk.className}>Sobre o jogo</h2>
          <p>
            {detalhes.description_raw.length > 400
              ? descricaoLimit
              : detalhes.description_raw}
          </p>
        </div>

        <div className={styles.sobre__dir}>
          <div className={styles.sobre__mainImg}>
            <Image
              src={fotosLimit[0]?.image || '/placeholder.png'}
              alt="Screenshot principal"
              fill
            />
          </div>
          <div className={styles.container}>
            <div className={styles.imgEsq}>
              <Image
                src={fotosLimit[1]?.image || '/placeholder.png'}
                alt="Screenshot"
                fill
              />
            </div>
            <div className={styles.imgDir}>
              <Image
                src={fotosLimit[2]?.image || '/placeholder.png'}
                alt="Screenshot"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
