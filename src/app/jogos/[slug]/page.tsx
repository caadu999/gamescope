import { getJogoSlug, getScreenshots } from '@/lib/API/API';
import styles from '@/app/jogos/[slug]/detalhes.module.scss';
import { oldschoolGrotesk } from '@/lib/fonts';
import Salvar from '@/components/salvarButton/salvar';
import Image from 'next/image';
import { suisse, geist } from '../../../../public/fonts/fonts';
import { anton } from '../../../../public/fonts/fonts';

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

  const nomeUpper = detalhes.name.toUpperCase();

  return (
    <section className={styles.detalhes}>
      <div className="relative h-52 w-[84%] overflow-hidden rounded-sm lg:h-[460px] xl:h-[504px] xl:max-h-[504px]">
        <Image
          className="object-cover"
          src={detalhes.background_image || '/placeholder.png'}
          alt={detalhes.name}
          fill
        />
      </div>
      <div className={styles.detalhes__containerTop}>
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col gap-[8px]">
            <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-0">
              <h1
                className={`${anton.className} w-[90%] text-[42px] lg:text-[112px] lg:leading-[118px]`}
              >
                {nomeUpper}
              </h1>
              <Salvar jogo={detalhes} />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[28px] flex w-[84%] flex-col justify-between gap-8 lg:flex-row lg:gap-0">
        <p
          className={`${geist.className} w-full text-[20px] font-medium text-[#bbbbbb] lg:w-[60%]`}
        >
          {detalhes.description_raw.length > 400
            ? descricaoLimit
            : detalhes.description_raw}
        </p>
        <div className={`flex flex-col gap-4 lg:items-end ${geist.className}`}>
          <div className="flex items-center gap-4">
            <p className="font-regular text-[#bbbbbb]">(ANO)</p>
            <div className="h-2 w-2 rounded-full bg-[#FF643D]"></div>
            <p className="text-[16px] font-[800] lg:text-[19px]">
              {detalhes.released.slice(0, 4)}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-regular text-[#bbbbbb]">(NOTA)</p>
            <div className="h-2 w-2 rounded-full bg-[#FF643D]"></div>
            <p className="text-[16px] font-[800] lg:text-[19px]">
              {detalhes.rating ? detalhes.rating : 'S/N'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-regular text-[#bbbbbb]">(PUBLISHER)</p>
            <div className="h-2 w-2 rounded-full bg-[#FF643D]"></div>
            <p className="text-[16px] font-[800] lg:text-[19px]">
              {detalhes.publishers[0].name}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20 hidden w-[84%] flex-wrap items-center justify-between gap-6 lg:flex">
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
        <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
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
