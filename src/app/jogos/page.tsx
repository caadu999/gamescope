import Card from '@/components/jogoCard';
import {
  getJogosEmAlta,
  getLancamentos,
  getMaisBemAvaliados,
} from '@/lib/API/API';
import styles from '@/app/jogos//jogos.module.scss';
import TituloHome from '@/components/tituloHome';
import { FaRocket } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa6';
import { FaFireAlt } from 'react-icons/fa';
import Titulo from '@/components/titulo/titulo';

export const revalidate = 3600;

export default async function Jogos() {
  const jogosEmAlta = await getJogosEmAlta();
  const bemAval = await getMaisBemAvaliados();
  const lancamentos = await getLancamentos();

  return (
    <div className={styles.container}>
      <TituloHome text="Descubra novos jogos" />
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
