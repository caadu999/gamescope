import Card from '@/components/jogoCard';
import {
  getJogosEmAlta,
  getLancamentos,
  getMaisBemAvaliados,
  getJogoDestaque,
  getDetalhes,
} from '@/lib/API/API';
import styles from '@/app/jogos//jogos.module.scss';
import { FaMedal } from 'react-icons/fa6';
import { FaFireAlt, FaRocket } from 'react-icons/fa';
import Titulo from '@/components/titulo/titulo';
import { anton, suisse } from '../../../public/fonts/fonts';
import Destaque from './destaque';

export const revalidate = 3600;

export default async function Jogos() {
  const [jogosEmAlta, bemAval, lancamentos] = await Promise.all([
    getJogosEmAlta(),
    getMaisBemAvaliados(),
    getLancamentos(),
  ]);

  const jogosDestaque = await getJogoDestaque();
  const jogosDestaqueDetalhes = await getDetalhes(jogosDestaque.slug);

  return (
    <div className={`${styles.container}`}>
      <div className="mb-10 mt-10 flex items-center justify-between pl-4 lg:mb-10 lg:mt-16 lg:w-[90%] xl:w-full">
        <div className="flex flex-col gap-2 lg:w-80">
          <span
            className={`flex items-center gap-4 lg:text-sm ${suisse.className}`}
          >
            {' '}
            <div className="h-[12px] w-[12px] rounded-full bg-gray-500">
              {' '}
            </div>{' '}
            01 _
          </span>
          <h1
            className={`text-[70px] font-bold leading-[90px] lg:text-[80px] lg:leading-[90px] ${anton.className}`}
          >
            CATÁLOGO <br /> DE JOGOS
          </h1>
          <p className={`w-[80%] lg:w-full lg:text-sm ${suisse.className}`}>
            Explore nosso catálogo com milhares de jogos. Encontre sua próxima
            aventura
          </p>
        </div>
        <Destaque jogo={jogosDestaqueDetalhes} />
      </div>

      <div className={styles.container__card}>
        <Titulo
          icon={<FaRocket size={34} />}
          text="Em alta"
          className={styles.iconOrange}
          link="em-alta"
        />
        <ul className={styles.lista}>
          {jogosEmAlta
            .map((jogo) => <Card key={jogo.id} jogo={jogo} />)
            .slice(0, 4)}
        </ul>
      </div>
      <div className={styles.container__card}>
        <Titulo
          icon={<FaMedal size={34} />}
          text="Mais bem avaliados"
          className={styles.iconPurple}
          link="melhores"
        />
        <ul className={styles.lista}>
          {bemAval
            .map((jogo) => <Card key={jogo.id} jogo={jogo} />)
            .slice(0, 4)}
        </ul>
      </div>
      <div className={styles.container__card}>
        <Titulo
          icon={<FaFireAlt size={34} />}
          text="Lançamentos"
          className={styles.iconYellow}
          link="lancamentos"
        />
        <ul className={styles.lista}>
          {lancamentos
            .map((jogo) => <Card key={jogo.id} jogo={jogo} />)
            .slice(0, 4)}
        </ul>
      </div>
    </div>
  );
}
