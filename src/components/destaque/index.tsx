import styles from '@/components/destaque/destaque.module.scss';
import { getDetalhes, getJogoDestaque } from '@/lib/API/API';
import Image from 'next/image';
import Link from 'next/link';

export default async function Destaque() {
  const jogosDestaque = await getJogoDestaque();
  const jogosDestaqueDetalhes = await getDetalhes(jogosDestaque.slug);

  console.log(jogosDestaque);
  return (
    <section className={styles.container}>
      <div>
        <p>[ DESTAQUE ] </p>
        <Image
          src={jogosDestaque.background_image}
          width={500}
          height={300}
          alt={jogosDestaque.name}
          priority
        ></Image>
      </div>
      <ul>
        {jogosDestaque.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h1>{jogosDestaque.name}</h1>
      <p>{jogosDestaqueDetalhes.description_raw}</p>
      <Link href={`jogos/${jogosDestaque.slug}`}>MAIS</Link>
    </section>
  );
}
