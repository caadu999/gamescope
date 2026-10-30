'use client';
import { Resultss } from '@/types/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Salvar from '@/components/salvarButton/salvar';
import { anton } from '../../../../../public/fonts/fonts';
import { geist } from '../../../../../public/fonts/fonts';

type infoProps = {
  jogo: Resultss;
};

export default function Info({ jogo }: infoProps) {
  const cover = `https://images.igdb.com/igdb/image/upload/t_original/${jogo.cover.image_id}.jpg`;
  const release = new Date(jogo.first_release_date * 1000).getFullYear();

  const descricaoLimit = `${jogo.summary.substring(0, 400)}...`;
  const nomeUpper = jogo.name.toUpperCase();
  const nota = String(jogo.rating).slice(0, 4);
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}
        className="relative h-52 w-[84%] overflow-hidden rounded-sm lg:h-[460px] xl:h-[504px] xl:max-h-[504px]"
      >
        <Image
          className="object-cover"
          src={cover || '/placeholder.png'}
          alt={jogo.name}
          quality={75}
          fill
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
        }}
        className="flex w-[84%]"
      >
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-col gap-[8px]">
            <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-0">
              <h1
                className={`${anton.className} w-[90%] text-[42px] lg:text-[112px] lg:leading-[118px]`}
              >
                {nomeUpper}
              </h1>
              <Salvar jogo={jogo} />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
        }}
        className="mb-[28px] flex w-[84%] flex-col justify-between gap-8 lg:flex-row lg:gap-0"
      >
        <p
          className={`${geist.className} w-full text-[20px] font-medium text-[#bbbbbb] lg:w-[60%]`}
        >
          {jogo.summary.length > 400 ? descricaoLimit : jogo.summary}
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
              {jogo?.involved_companies
                ? jogo.involved_companies[0].company.name
                : 'S/N'}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
