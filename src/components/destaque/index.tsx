import styles from '@/components/destaque/destaque.module.scss';
import { getDetalhes, getJogoDestaque } from '@/lib/API/API';
import Link from 'next/link';
import Tags from '../tags';
import { FaStar } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import { oldschoolGrotesk } from '@/app/layout';

export default async function Destaque() {
  const jogosDestaque = await getJogoDestaque();
  const jogosDestaqueDetalhes = await getDetalhes(jogosDestaque.slug);

  const descricao = `${jogosDestaqueDetalhes.description_raw.substring(0, 180)}...`;

  return (
    <section className={styles.destaque}>
      <div className={styles.destaque__img}>
        <div
          className={styles.img__container}
          style={{
            backgroundImage: `url(${jogosDestaque.background_image})`,
          }}
        >
          <div className={styles.img__container__icon}>
            <FaTrophy size={40} color="#16181C" />
          </div>
          <ul className={styles.destaque__lista}>
            {jogosDestaque.genres.map((genre) => (
              <Tags text={genre} key={genre.id} />
            ))}
          </ul>
        </div>

        <div className={styles.destaque__interacoes}>
          <h2 className={oldschoolGrotesk.className}>
            {jogosDestaqueDetalhes.name}
          </h2>
          <p>{descricao}</p>

          <div className={styles.destaque__botoes}>
            <div className={styles.destaque__notas}>
              <FaStar />
              <span>
                {jogosDestaqueDetalhes.rating}
                <span className={styles.destaque__notas__total}> / 5.0</span>
              </span>
            </div>
            <div className={styles.destaque__direita}>
              <Link href={'/'}>
                <div className={styles.destaque__icons}>
                  <FaBookmark className={styles.destaque__icon} size={20} />
                </div>
              </Link>
              <Link
                href={`jogos/${jogosDestaque.slug}`}
                className={styles.button}
              >
                <FaArrowAltCircleRight size={40} />
                <span>Saiba Mais</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
