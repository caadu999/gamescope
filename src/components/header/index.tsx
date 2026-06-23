import Link from 'next/link';
import styles from '@/components/header/header.module.scss';
import { oldschoolGrotesk } from '@/app/layout';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={oldschoolGrotesk.className}>
        <Link href={'/'}>G</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Sobre</Link>
          </li>
          <li>
            <Link href={'/'}>Wishlist</Link>
          </li>
          <li>
            <Link href={'/jogos'}>Jogos</Link>
          </li>
        </ul>
      </nav>
      <input
        type="search"
        name="search"
        id="sarch"
        placeholder="Buscar jogos"
        className={styles.header__search}
      />
    </header>
  );
}
