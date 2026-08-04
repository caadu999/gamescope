import { getJogoDestacado } from '@/lib/API/API';
import Link from 'next/link';
import { PiStarFourFill } from 'react-icons/pi';

import { oldschoolGrotesk } from '@/lib/fonts';
import Salvar from '../salvarButton/salvar';
import { suisse } from '../../../public/fonts/fonts';
import { CursorFollow } from './cursorHover';
import { geist } from '../../../public/fonts/fonts';

export default async function Destaque() {
  const jogos = await getJogoDestacado();
  const descricao = `${jogos.summary?.substring(0, 180)}...`;

  return (
    <Link href={`/jogos/${jogos.slug}`}>
      <CursorFollow label="Veja o destaque">
        <section className="flex w-96 flex-col items-center rounded-xl border-[1px] border-solid border-[#2e2e2e] bg-[#111111] p-4 md:w-3/4 lg:h-[400px] lg:w-[920px] lg:flex-row lg:gap-6 lg:p-4 xl:w-[1100px]">
          <div
            className="flex h-80 w-[100%] flex-col justify-between rounded-lg bg-cover bg-center p-4 lg:h-full lg:w-96"
            style={{
              backgroundImage: `url(https://images.igdb.com/igdb/image/upload/t_cover_big/${jogos?.cover?.image_id}.jpg)`,
            }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#161513] p-2">
              <PiStarFourFill size={40} color="#D2D2CD" />
            </div>
          </div>
          <div className="flex w-[100%] flex-col justify-center gap-4 overflow-hidden p-4 lg:h-full lg:w-5/6 lg:justify-between lg:p-0 2xl:h-full">
            <div className="flex flex-col gap-2">
              <p className={`hidden lg:block lg:font-bold ${suisse.className}`}>
                DESTAQUE
              </p>
              <h2
                className={`mt-4 w-[90%] border-b-[1px] border-dotted border-[#434141] pb-2 text-3xl text-[#E8E8E3] lg:mt-0 lg:pb-3 lg:text-5xl ${oldschoolGrotesk.className}`}
              >
                {jogos.name}
              </h2>
            </div>
            <p
              className={`mb-2 text-[#b9b6b6] lg:w-[90%] xl:text-lg 2xl:mb-4 2xl:w-[84%]`}
            >
              {descricao}
            </p>
            <div className="flex items-center justify-between gap-4 lg:w-full">
              <ul className={`hidden gap-4 lg:flex ${geist.className}`}>
                {jogos?.genres?.slice(0, 3).map((genre) => (
                  <li
                    key={genre.id}
                    className="rounded-[3px] bg-[#E8E8E3] px-4 py-1 text-[18px] font-bold text-[#141414]"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
              <div>
                <Salvar jogo={jogos} />
              </div>
            </div>
          </div>
        </section>
      </CursorFollow>
    </Link>
  );
}
