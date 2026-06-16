import Link from 'next/link';
import styles from '@/components/headerside/headerside.module.scss';
export default function HeaderSideBar() {
  return (
    <header className={styles.header}>
      <Link href="#">
        <h1>GAMESCOPE</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="#">1.1 JOGOS</Link>
          </li>
          <li>
            <Link href="#">1.2 SOBRE</Link>
          </li>
          <li>
            <Link href="#">1.3 DESCUBRA</Link>
          </li>
          <li>
            <Link href="#">1.4 JOGOS</Link>
          </li>
        </ul>
      </nav>
      <h2>ECNOTRE SEU NOVO JOGO FAVORITO AQUI</h2>
    </header>
  );
}
