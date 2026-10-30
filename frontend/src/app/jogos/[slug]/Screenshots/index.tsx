'use client';

import { Resultss } from '@/types/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

type jogoProps = {
  jogo: Resultss;
};

export default function Screenshots({ jogo }: jogoProps) {
  const screenshotOne = `https://images.igdb.com/igdb/image/upload/t_1080p/${jogo.screenshots[0]?.image_id}.jpg`;
  const screenshotTwo = `https://images.igdb.com/igdb/image/upload/t_1080p/${jogo.screenshots[1]?.image_id}.jpg`;
  const screenshotThree = `https://images.igdb.com/igdb/image/upload/t_1080p/${jogo.screenshots[2]?.image_id}.jpg`;

  return (
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

      className="mb-20 hidden w-[84%] flex-wrap items-center justify-between gap-6 lg:flex"
    >
      <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
        <Image
          src={screenshotOne}
          fill
          quality={75}
          alt={jogo.name}
          className="object-cover"
        ></Image>
      </div>
      <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
        <Image
          src={screenshotTwo}
          fill
          quality={75}
          alt={jogo.name}
          className="object-cover"
        ></Image>
      </div>
      <div className="relative overflow-hidden rounded-sm xl:h-[270px] xl:w-[460px]">
        <Image
          src={screenshotThree}
          fill
          quality={75}
          alt={jogo.name}
          className="object-cover"
        ></Image>
      </div>
    </motion.div>
  );
}
