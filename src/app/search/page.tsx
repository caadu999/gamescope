import CardResultado from '@/components/CardResultado/cardResultado';
import { Search } from '@/lib/API/API';
import { oldschoolGrotesk } from '@/lib/fonts';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import styles from '@/app/search/search.module.scss';

type SearchParams = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchParams) {
  const { q } = await searchParams;
  const query = q ?? ' ';
  const jogos = await Search(query);

  return (
    <section className={styles.container}>
      <Link href={'/'} className={styles.container__back}>
        <IoIosArrowBack size={20} />
        <span>Voltar para Home</span>
      </Link>

      <h1 className={oldschoolGrotesk.className}>
        Resultados para <span>{` "${query}"`}</span>
      </h1>
      <p>Exibindo {jogos.length} resultados</p>
      <ul>
        {jogos.map((jogo) => (
          <CardResultado jogo={jogo} key={jogo.id} />
        ))}
      </ul>
    </section>
  );
}
