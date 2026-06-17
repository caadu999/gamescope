import Header from '@/components/header';
import Card from '@/components/jogoCard';
import {
  getJogosEmAlta,
  getLancamentos,
  getMaisBemAvaliados,
} from '@/lib/API/API';
import Link from 'next/link';
import styles from '@/app/jogos//jogos.module.scss';

export default async function Jogos() {
  const jogosEmAlta = await getJogosEmAlta();
  const bemAval = await getMaisBemAvaliados();
  const lancamentos = await getLancamentos();

  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <h1>Em Alta</h1>
        <ul className={styles.lista}>
          {jogosEmAlta
            .map((jogo) => <Card key={jogo.id} jogo={jogo} />)
            .slice(0, 5)}
          <Link href={'/jogos/em-alta'}>MAIS</Link>
        </ul>
      </div>
      <div className={styles.container}>
        <h1>Mais bem avaliados</h1>
        <ul className={styles.lista}>
          {bemAval
            .map((jogo) => <Card key={jogo.id} jogo={jogo} />)
            .slice(0, 5)}
          <Link href={'/'}>MAIS</Link>
        </ul>
      </div>
      <div className={styles.container}>
        <h1>Lançamentos recentes</h1>
        <ul className={styles.lista}>
          {lancamentos
            .map((jogo) => <Card key={jogo.id} jogo={jogo} />)
            .slice(0, 5)}
          <Link href={'/jogos/em-alta'}>MAIS</Link>
        </ul>
      </div>
    </div>
  );
}
