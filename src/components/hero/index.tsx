import styles from '@/components/hero/hero.module.scss';
import HeaderSideBar from '../headerside';
import Destaque from '../destaque';

export default function Hero() {
  return (
    <section className={styles.container}>
    
        <HeaderSideBar></HeaderSideBar>
      <Destaque />
    </section>
  );
}
