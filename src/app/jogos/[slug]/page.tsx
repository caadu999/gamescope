import { getJogosSlug } from '@/lib/API/API';
import styles from '@/app/jogos/[slug]/detalhes.module.scss';
import Salvar from '@/components/salvarButton/salvar';
import Image from 'next/image';
import { geist, anton } from '../../../../public/fonts/fonts';

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
  const cover = `https://images.igdb.com/igdb/image/upload/t_original/${detalhes.cover.image_id}.jpg`;
  const screenshotOne = `https://images.igdb.com/igdb/image/upload/t_1080p/${detalhes.screenshots[0]?.image_id}.jpg`;
  const screenshotTwo = `https://images.igdb.com/igdb/image/upload/t_1080p/${detalhes.screenshots[1]?.image_id}.jpg`;
  const screenshotThree = `https://images.igdb.com/igdb/image/upload/t_1080p/${detalhes.screenshots[2]?.image_id}.jpg`;
  const release = new Date(detalhes.first_release_date * 1000).getFullYear();

  const descricaoLimit = `${detalhes.summary.substring(0, 400)}...`;
  const nomeUpper = detalhes.name.toUpperCase();
  const nota = String(detalhes.rating).slice(0, 4);

  return (
    <section className={styles.detalhes}>
      <div className="relative h-52 w-[84%] overflow-hidden rounded-sm lg:h-[460px] xl:h-[504px] xl:max-h-[504px]">
        <Image
          className="object-cover"
          src={cover || '/placeholder.png'}
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
          {detalhes.summary.length > 400 ? descricaoLimit : detalhes.summary}
        </p>
        <div className={`flex flex-col gap-4 lg:items-end ${geist.className}`}>
          <div className="flex items-center gap-4">
            <p className="font-regular text-[#bbbbbb]">(ANO)</p>
            <div className="h-2 w-2 rounded-full bg-[#FF643D]"></div>
            <p className="text-[16px] font-[800] lg:text-[19px]">{release}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-regular text-[#bbbbbb]">(NOTA)</p>
            <div className="h-2 w-2 rounded-full bg-[#FF643D]"></div>
            <p className="text-[16px] font-[800] lg:text-[19px]">
              {nota ? nota : 'S/N'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-regular text-[#bbbbbb]">(PUBLISHER)</p>
            <div className="h-2 w-2 rounded-full bg-[#FF643D]"></div>
            <p className="text-[16px] font-[800] lg:text-[19px]">
              {detalhes?.involved_companies
                ? detalhes.involved_companies[0].company.name
                : 'S/N'}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20 hidden w-[84%] flex-wrap items-center justify-between gap-6 lg:flex">
        <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
          <Image
            src={screenshotOne}
            fill
            quality={75}
            alt={detalhes.name}
            className="object-cover"
          ></Image>
        </div>
        <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
          <Image
            src={screenshotTwo}
            fill
            quality={75}
            alt={detalhes.name}
            className="object-cover"
          ></Image>
        </div>
        <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
          <Image
            src={screenshotThree}
            fill
            quality={75}
            alt={detalhes.name}
            className="object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
}
