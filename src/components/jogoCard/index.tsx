import { Results } from '@/types/types';
import Link from 'next/link';

import Tags from '../tags';
import { FaStar } from 'react-icons/fa';
import { oldschoolGrotesk } from '@/lib/fonts';
import Image from 'next/image';

type CardProps = {
  jogo: Results;
};

export default function Card({ jogo }: CardProps) {
  const tituloMenor = `${jogo.name.substring(0, 30)}...`;

  return (
    <section className="flex w-24 flex-col justify-between rounded-lg bg-[#232323] md:w-full xl:h-96 xl:overflow-hidden">
      <Link href={`/jogos/${jogo.slug}`}>
        <div className="relative h-40 overflow-hidden rounded-lg md:h-52 xl:rounded-none">
          <Image
            className="object-cover transition-all duration-200 ease-in hover:scale-125"
            src={jogo.background_image || '/placeholder.png'}
            alt={jogo.name}
            fill
            quality={80}
          />
        </div>
      </Link>
      <div className="flex h-full flex-col justify-between gap-2 xl:p-4">
        <h1
          className={`hidden w-[90%] text-[20px] xl:block ${oldschoolGrotesk.className}`}
        >
          {jogo.name.length >= 30 ? tituloMenor : jogo.name}
        </h1>
        <p className="hidden items-center text-[20px] font-bold xl:inline-flex xl:gap-2">
          {' '}
          <FaStar size={20} color="#fdc317" />{' '}
          {jogo.rating ? jogo.rating : 'S/N'}
        </p>
        <div className="hidden gap-2 xl:flex">
          {jogo.genres.length > 0 ? (
            jogo.genres.map((genre) => (
              <Tags text={genre} key={jogo.description_raw} />
            ))
          ) : (
            <p className="bg-[#141414] font-bold xl:rounded-lg xl:px-4 xl:py-2">
              S/N
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
