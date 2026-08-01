import CardResultado from '@/components/CardResultado/cardResultado';
import { Search } from '@/lib/API/API';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import { anton } from '../../../public/fonts/fonts';

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
    <section className="mt-[64px] flex w-[84%] flex-col items-center text-[#e8e8e3]">
      <div className="flex w-full flex-col items-start justify-between gap-2">
        <div className="mb-8">
          <Link href={'/'} className="flex items-center gap-[1.2em] font-bold">
            <IoIosArrowBack size={16} />
            <span className="text-[16px]">Voltar para Home</span>
          </Link>
        </div>
        <div className="flex h-fit flex-col">
          <p>Você procurou por:</p>
          <h1
            className={`${anton.className} text-[3em] text-[#FF643D] lg:text-[4.1em]`}
          >
            {` "${query.toUpperCase()}"`}
          </h1>
          <p className="mb-2 mt-4 text-[#bbbbbb]">
            Exibindo {jogos.length} resultados
          </p>
        </div>
      </div>
      <ul className="mb-20 flex w-full flex-wrap gap-5">
        {jogos.map((jogo) => (
          <CardResultado jogo={jogo} key={jogo.id} />
        ))}
      </ul>
    </section>
  );
}
