import { getJogosSlug } from '@/lib/API/API';
import styles from '@/app/jogos/[slug]/detalhes.module.scss';
import Screenshots from './Screenshots';
import Info from './Info';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const game = await getJogosSlug(slug);

  return {
    title: `GAMESCOPE • ${game.name}`,
    description: game.summary,
    openGraph: {
      title: game.name,
      description: game.summary,
    },
  };
}

export default async function Detalhes({ params }: Props) {
  const { slug } = await params;
  const detalhes = await getJogosSlug(slug);

  return (
    <section className={styles.detalhes}>
      <Info jogo={detalhes} />
      <Screenshots jogo={detalhes} />
    </section>
  );
}
