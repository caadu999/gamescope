import styles from '@/components/destaque/destaque.module.scss';
import { getDetalhes, getJogoDestaque } from '@/lib/API/API';
import Link from 'next/link';
import Tags from '../tags';
import { FaStar } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import { oldschoolGrotesk } from '@/lib/fonts';
import Salvar from '../salvarButton/salvar';
import DetalheButton from './DetalheButton';

export default async function Destaque() {
  const jogosDestaque = await getJogoDestaque();
  const jogosDestaqueDetalhes = await getDetalhes(jogosDestaque.slug);

  const descricao = `${jogosDestaqueDetalhes.description_raw.substring(0, 180)}...`;

  return (
    <section className="mb-6 mt-4 flex w-96 flex-col items-center rounded-xl border-[1px] border-solid border-[#2e2e2e] bg-[#111111] p-4 md:w-3/4 lg:h-[400px] lg:w-[920px] lg:flex-row lg:gap-6 lg:p-4 xl:w-[1100px]">
      <div
        className="flex h-80 w-[100%] flex-col justify-between rounded-lg bg-cover bg-center p-4 lg:h-full lg:w-96"
        style={{
          backgroundImage: `url(${jogosDestaque.background_image})`,
        }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffc412] p-2">
          <FaTrophy size={40} color="#16181C" />
        </div>
        <ul className={styles.destaque__lista}>
          {jogosDestaque.genres.map((genre) => (
            <Tags text={genre} key={genre.id} />
          ))}
        </ul>
      </div>

      <div className="flex w-[100%] flex-col justify-center gap-4 overflow-hidden p-4 lg:h-full lg:w-5/6 lg:justify-between lg:p-0 2xl:h-full">
        <div className="flex flex-col gap-2">
          <p className="hidden lg:block lg:font-bold">DESTAQUE</p>
          <h2
            className={`mt-4 w-[90%] border-b-[1px] border-solid border-[#434141] pb-2 text-3xl lg:mt-0 lg:pb-3 lg:text-5xl ${oldschoolGrotesk.className}`}
          >
            {jogosDestaqueDetalhes.name}
          </h2>
        </div>
        <p className="mb-2 text-[#b9b6b6] lg:w-[90%] xl:text-lg 2xl:mb-4 2xl:w-[84%]">
          {descricao}
        </p>

        <div className="flex items-end justify-between gap-8 lg:w-full">
          <div className="hidden gap-3 text-3xl font-bold lg:flex lg:items-center lg:justify-center">
            <FaStar size={30} />
            <span>
              {jogosDestaqueDetalhes.rating}
              <span className="text-[1.4rem] font-normal"> / 5.0</span>
            </span>
          </div>
          <div className="flex gap-2">
            <Salvar jogo={jogosDestaque} />
            <Link href={`jogos/${jogosDestaque.slug}`}>
              <DetalheButton />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
