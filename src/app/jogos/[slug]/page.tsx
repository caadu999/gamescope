import { getJogoSlug, getScreenshots } from '@/lib/API/API';
import styles from '@/app/jogos/[slug]/detalhes.module.scss';
import { oldschoolGrotesk } from '@/lib/fonts';
import Salvar from '@/components/salvarButton/salvar';
import Image from 'next/image';
import { suisse, geist } from '../../../../public/fonts/fonts';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const game = await getJogoSlug(slug);

  return {
    title: `GAMESCOPE | ${game.name}`,
    description: game.description_raw,
    openGraph: {
      title: game.name,
      description: game.description_raw,
      images: [{ url: game.background_image }],
    },
  };
}

export default async function Detalhes({ params }: Props) {
  const { slug } = await params;
  const detalhes = await getJogoSlug(slug);
  const descricaoLimit = `${detalhes.description_raw.substring(0, 400)}...`;

  const fotos = await getScreenshots(slug);
  const fotosLimit = fotos.slice(0, 3);

  console.log(detalhes);

  return (
    <section className={styles.detalhes}>
      <div className={styles.detalhes__containerTop}>
        <div className={styles.detalhes__img}>
          <Image
            src={detalhes.background_image || '/placeholder.png'}
            alt={detalhes.name}
            fill
          />
        </div>

        <div className={styles.detalhes__title}>
          <div className={styles.detalhes__titles}>
            <h1 className={oldschoolGrotesk.className}>{detalhes?.name}</h1>
            <div className={`flex items-center gap-4 ${geist.className}`}>
              <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              <p className="text-[19px] font-[800]">
                {detalhes.released.slice(0, 4)}
              </p>
              <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              <p className="text-[19px] font-[800]">
                {detalhes.rating ? detalhes.rating : 'S/N'}
              </p>
              <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              <p className="text-[19px] font-[800]">
                {detalhes.publishers[0].name}
              </p>
            </div>
          </div>
          <div className={styles.detalhes__buttons}>
            <Salvar jogo={detalhes} />
          </div>
        </div>
      </div>

      <div className={styles.sobre}>
        <div className={`${styles.sobre__esq} w-[50%]`}>
          <h2 className={`text-[22px] ${suisse.className}`}>SOBRE</h2>
          <p className={`${geist.className} w-[80%] text-[20px] font-medium`}>
            {detalhes.description_raw.length > 400
              ? descricaoLimit
              : detalhes.description_raw}
          </p>
        </div>
      </div>
      <div className="mb-6 flex w-[80%] flex-wrap items-center justify-between gap-6">
        <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
          <Image
            src={fotosLimit[0]?.image || '/placeholder.png'}
            fill
            quality={70}
            alt={detalhes.name}
            className="object-cover"
          ></Image>
        </div>
        <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
          <Image
            src={fotosLimit[1]?.image || '/placeholder.png'}
            fill
            quality={70}
            alt={detalhes.name}
            className="object-cover"
          ></Image>
        </div>
        <div className="rounded-sms relative overflow-hidden xl:h-[270px] xl:w-[460px]">
          <Image
            src={fotosLimit[2]?.image || '/placeholder.png'}
            fill
            quality={70}
            alt={detalhes.name}
            className="object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
}
