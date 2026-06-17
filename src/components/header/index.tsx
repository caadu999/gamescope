import Link from "next/link"
import styles from "@/components/header/header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href={"/"}>GAMESCOPE</Link>
      </h1>

      <nav>
        <ul>
          <li><Link href={"/"}>HOME</Link></li>
          <li><Link href={"/"}>SOBRE</Link></li>
          <li><Link href={"/"}>WISHLIST</Link></li>
          <li><Link href={"/jogos"}>JOGOS</Link></li>
        </ul>
      </nav>
      <input type="search" name="search" id="sarch" />
    </header>
  )
}